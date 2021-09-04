import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Musico } from "../models/Musico";

class MusicoController {
  async getAllMusicos(req: Request, res: Response) {
    const repo = getRepository(Musico);

    const musicos = await repo
      .createQueryBuilder("musicos")
      .leftJoinAndSelect("musicos.instrumento", "instrumento")
      .leftJoinAndSelect("musicos.nivel", "nivel")
      .leftJoinAndSelect("musicos.vozes", "voz")
      .leftJoinAndSelect("musicos.cultos", "culto")
      .getMany();
    
    return res.status(StatusCodes.OK).json(musicos);
  }

  async getByVozAndCulto(req: Request, res: Response) {
    const { voz, culto } = req.params;
    const repo = getRepository(Musico);
    
    const resultado = await repo
      .createQueryBuilder("musico")
      .leftJoinAndSelect("musico.instrumento", "instrumento")
      .leftJoinAndSelect("musico.nivel", "nivel")
      .leftJoinAndSelect("musico.vozes", "voz")
      .leftJoinAndSelect("musico.cultos", "culto")
      .where(`voz.id = '${voz}'`)
      .andWhere(`culto.id = '${culto}'`)
      .orderBy("musico_culto.qtd_tocada", "ASC")
      .getMany();
    
    return res.status(StatusCodes.OK).json(resultado);
  }
}

export { MusicoController }