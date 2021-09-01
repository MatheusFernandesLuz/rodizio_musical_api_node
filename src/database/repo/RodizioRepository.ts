import { EntityRepository, getConnection, getCustomRepository, getRepository, Repository } from "typeorm";
import { Culto } from "../../models/Culto";
import { Musico } from "../../models/Musico";
import { MusicoCulto } from "../../models/MusicoCulto";
import { MusicoRodizio } from "../../models/MusicoRodizio";
import { Rodizio } from "../../models/Rodizio";
import { MusicoRepository } from "./MusicoRepository";

export interface IVozQuantidade {
  soprano: number;
  contralto: number;
  tenor: number;
  baixo: number;
}

export interface ISelectMusicos extends IVozQuantidade {
  rodizio_id: number;
  culto: string;  
}

@EntityRepository(Rodizio)
class RodizioRepository extends Repository<Rodizio> {
  async SelecionaMusicos(opcoes: ISelectMusicos): Promise<Musico[]> {
    const { rodizio_id, culto, ...qtd } = opcoes;
    const resultado: Musico[] = [];
    const repo_musicos = getCustomRepository(MusicoRepository);

    const vozes = [
      { id: 1, qtd: qtd.soprano },
      { id: 2, qtd: qtd.contralto },
      { id: 3,qtd: qtd.tenor },
      { id: 4, qtd: qtd.baixo }
    ];

    for (let i = 0; i < vozes.length; i++) {
      const voz = vozes[i];

      let musicos =
        await repo_musicos.BuscaMusicosPorVozECulto(
        voz.id,
        culto,
        voz.qtd,
        resultado.map(m => m.id)
      );
      
      await this.InsereNoRodizio(rodizio_id, musicos, voz.id);
      resultado.push(...musicos);
    }    

    return resultado;
  }

  async IncrementaQtdTocada(musico_id: number, culto_id: number) {
    const conn = getConnection();

    return await conn
      .createQueryBuilder()
      .update(MusicoCulto)
      .set({ qtd_tocada: () => "qtd_tocada + 1" })
      .where(`musico_id = ${musico_id} AND culto_id = ${culto_id}`)
      .execute()
  }

  async DecrementaQtdTocada(musico_id: number, culto_id: number) {
    const conn = getConnection();

    return await conn
      .createQueryBuilder()
      .update(MusicoCulto)
      .set({ qtd_tocada: () => "qtd_tocada - 1" })
      .where(`musico_id = ${musico_id} AND culto_id = ${culto_id}`)
      .execute()
  }

  async InsereNoRodizio(rodizio_id: number, musicos: Musico[], voz_id: number) {   
    const conn = getConnection();
    const rodizio = await this.findOne({ where: { id: rodizio_id } });

    for (let i = 0; i < musicos.length; i++) {
      const musico = musicos[i];
      
      await conn.createQueryBuilder().insert().into(MusicoRodizio)
        .values({ musico_id: musico.id, rodizio_id: rodizio.id, voz_id: voz_id })
        .execute();
      
      await this.IncrementaQtdTocada(musico.id, rodizio.culto_id);
    }
  }

  async RetiraDoRodizio(rodizio_id: number, musicos: Musico[]) {
    const conn = getConnection();
    const rodizio = await this.findOne({ where: { id: rodizio_id } });

    for (let i = 0; i < musicos?.length; i++) {
      const musico = musicos[i];
      
      await conn.createQueryBuilder().delete().from(MusicoRodizio)
        .where(`rodizio_id = ${rodizio_id} AND musico_id = ${musico.id}`)
        .execute();
      
      await this.DecrementaQtdTocada(musico.id, rodizio.culto_id);
    }
  }

  async BuscaRodizio(id: string) {
    return await
      getConnection()
      .createQueryBuilder()
      .select("rodizio.id, rodizio.data_rodizio, culto.id as culto")
      .from(Rodizio, "rodizio")
      .leftJoin(Culto, "culto", "culto.id = rodizio.culto_id")
      .where(`rodizio.id = ${id}`)
      .getRawOne();
  }

  async BuscaTodosRodizios() {
    return await getConnection()
    .createQueryBuilder()
    .select("rodizio.id, rodizio.data_rodizio as data, culto.id as culto")
    .from(Rodizio, "rodizio")
    .leftJoin(Culto, "culto", "rodizio.culto_id = culto.id")
    .getRawMany();
  }

  async DeletaRodizio(id: number) {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(MusicoRodizio)
      .where(`rodizio_id = ${id}`)
      .execute();
    
    return await this.delete({ id });
  }

  async TrocaVozMusico(rodizio_id: number, musico_id: number, voz_id: number) {
    return await getConnection()
      .createQueryBuilder()
      .update(MusicoRodizio)
      .set({ voz_id: () => voz_id.toString() })
      .where(`musico_id = ${musico_id} AND rodizio_id = ${rodizio_id}`)
      .execute();
  }

  async TrocaMusicoRodizio(rodizio_id: number, antigo_id: number, novo_id: number) {
    const repo_musicos = getCustomRepository(MusicoRepository);
    
    const antigo = await repo_musicos.findOne({ where: { id: antigo_id } });
    const novo = await repo_musicos.findOne({ where: { id: novo_id } });
    
    await this.RetiraDoRodizio(rodizio_id, [antigo]);
    await this.InsereNoRodizio(rodizio_id, [novo], novo.voz_principal);    
  }
}

export { RodizioRepository };