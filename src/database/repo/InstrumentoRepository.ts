import { EntityRepository, Repository } from "typeorm";
import { Instrumento } from "../../models/Instrumento";

@EntityRepository(Instrumento)
class InstrumentoRepository extends Repository<Instrumento> {

  async ObterTodosInstrumento() {
    return await this.find();
  }

  async ObterUmInstrumento(id: number) {
    return await this.findOne({ where: { id } });
  }
}

export { InstrumentoRepository }