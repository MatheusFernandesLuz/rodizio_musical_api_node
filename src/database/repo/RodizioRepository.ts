import { EntityRepository, getConnection, Repository } from "typeorm";
import { Culto } from "../../models/Culto";
import { Rodizio } from "../../models/Rodizio";

@EntityRepository(Rodizio)
class RodizioRepository extends Repository<Rodizio> {  
  async BuscaRodizioPorData(id: string) {
    return await
      getConnection()
      .createQueryBuilder()
      .select("rodizio.id, rodizio.data_rodizio, culto.nome as culto")
      .from(Rodizio, "rodizio")
      .leftJoin(Culto, "culto", "culto.id = rodizio.culto_id")
      .where(`rodizio.id = ${id}`)
      .getRawOne();
  }
}

export { RodizioRepository };