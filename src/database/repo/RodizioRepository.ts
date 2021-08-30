import { EntityRepository, getConnection, getCustomRepository, getRepository, Repository } from "typeorm";
import { Culto } from "../../models/Culto";
import { Musico } from "../../models/Musico";
import { MusicoRodizio } from "../../models/MusicoRodizio";
import { Rodizio } from "../../models/Rodizio";

@EntityRepository(Rodizio)
class RodizioRepository extends Repository<Rodizio> {  
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

  async TrocaVozMusico(rodizio_id: number, musico_id: number, voz_id: number) {
    return await getConnection()
      .createQueryBuilder()
      .update(MusicoRodizio)
      .set({ voz_id: () => voz_id.toString() })
      .where(`musico_id = ${musico_id} AND rodizio_id = ${rodizio_id}`)
      .execute();
  }

  async TrocaMusicoRodizio(rodizio_id: number, antigo_id: number, novo_id: number) {
    const musico_rodizio = await getConnection()
      .createQueryBuilder()
      .select()
      .from(MusicoRodizio, "mr")
      .where(`mr.rodizio_id = ${rodizio_id} AND mr.musico_id = ${antigo_id}`)
      .getRawOne();
    
    const novo = await getRepository(Musico).findOne({ where: { id: novo_id } });    

    musico_rodizio.musico_id = novo.id;
    musico_rodizio.voz_id = novo.voz_principal;
    
    const saved = await getRepository(MusicoRodizio).save(musico_rodizio);

    return saved;
  }
}

export { RodizioRepository };