import { EntityRepository, getConnection, Repository } from "typeorm";
import { Musico } from "../../models/Musico";
import { MusicoRodizio } from "../../models/MusicoRodizio";
import { Rodizio } from "../../models/Rodizio";
import { Voz } from "../../models/Voz";

export interface IMusicoRodizio extends Musico {
  voz_escalada: string;
}

export interface IVozQuantidade {
  soprano: number;
  contralto: number;
  tenor: number;
  baixo: number;
}

export interface ISelectMusicos extends IVozQuantidade {
  culto: string;
}

@EntityRepository(Musico)
class MusicoRepository extends Repository<Musico> {
  async BuscaMusicosPorVozECulto(voz: number, culto: string, quantidade: number, execao?: number[]) {
    return this.createQueryBuilder("musico")
      .leftJoinAndSelect("musico.instrumento", "instrumento")
      .leftJoinAndSelect("musico.vozes", "voz")
      .leftJoinAndSelect("musico.cultos", "culto")
      .where(`voz.id = '${voz}'`)
      .andWhere(`culto.nome = '${culto}'`)
      .andWhere(`musico.id NOT IN ('${execao.join("','")}')`)
      .orderBy("musico_culto.qtd_tocada", "ASC")
      .limit(quantidade)
      .getMany();
  }

  async BuscaMusicosPorRodizio(rodizio_id: string): Promise<IMusicoRodizio[]> {
    const resultado: IMusicoRodizio[] = [];

    await getConnection()
    .createQueryBuilder()
    .select("musico.id, voz.id as voz_escalada")
    .from(Rodizio, "rodizio")
    .leftJoin(MusicoRodizio, "mr", "mr.rodizio_id = rodizio.id")
    .leftJoin(Musico, "musico", "musico.id = mr.musico_id")
    .leftJoin(Voz, "voz", "voz.id = mr.voz_id")
    .where(`rodizio.id = ${rodizio_id}`)
    .getRawMany()
    .then(async musicos => {
      for (let i = 0; i < musicos.length; i++) {
        const musico = await this.findOne(
          {
            relations: ["vozes", "cultos", "instrumento"],
            where: { id: musicos[i].id }
          });
        
        resultado.push({
          ...musico,
          voz_escalada: musicos[i].voz_escalada
        });
      }
    });

    return resultado;
  }

  async BuscarUmMusico(musico_id: string): Promise<Musico> {
    return await this.findOne({
      where: { id: musico_id },
      relations: ["instrumento", "vozes", "cultos", "nivel"]
    });
  }

  async SaveMusico(musico: Musico): Promise<Musico> {
    return await this.save(musico);
  }
}

export { MusicoRepository };