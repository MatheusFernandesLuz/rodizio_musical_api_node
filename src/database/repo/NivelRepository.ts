import { EntityRepository, Repository } from "typeorm";
import { Nivel } from "../../models/Nivel";

@EntityRepository(Nivel)
class NivelRepository extends Repository<Nivel> {
  async ObterTodosNiveis() {
    return await this.find();
  }

  async ObterUmNivel(id: number) {
    return await this.findOne({ where: { id } });
  }
};
 
export { NivelRepository };