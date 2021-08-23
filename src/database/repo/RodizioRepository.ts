import { EntityRepository, getConnection, Repository } from "typeorm";
import { Culto } from "../../models/Culto";
import { Rodizio } from "../../models/Rodizio";

@EntityRepository(Rodizio)
class RodizioRepository extends Repository<Rodizio> {  
  async BuscaRodizioPorData(data: string) {
    return await
      getConnection()
      .createQueryBuilder()
      .select("rodizio.id, rodizio.data_rodizio, culto.nome as culto")
      .from(Rodizio, "rodizio")
      .leftJoin(Culto, "culto", "culto.id = rodizio.culto_id")
      .where(`rodizio.data_rodizio = ${data}`)
      .getRawOne();
  }
}

export { RodizioRepository };