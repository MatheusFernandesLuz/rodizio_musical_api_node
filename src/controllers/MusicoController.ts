import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Musico } from "../models/Musico";

class MusicoController {
  async getAllMusicos(req: Request, res: Response) {
    const repo = getRepository(Musico);

    const musicos = await repo
      .createQueryBuilder("musicos")
      .leftJoinAndSelect("musicos.nivel", "nivel")
      .leftJoinAndSelect("musicos.vozes", "voz")
      .leftJoinAndSelect("musicos.cultos", "culto")
      .getMany();
    
    return res.status(StatusCodes.OK).json(musicos);
  }

  async getByVozAndCulto(req: Request, res: Response) {
    const data = req.body as GetByVozAndCultoRequest;
    const repo = getRepository(Musico);
    
    const resultado = await repo
      .createQueryBuilder("musico")
      .leftJoinAndSelect("musico.nivel", "nivel")
      .leftJoinAndSelect("musico.vozes", "voz")
      .leftJoinAndSelect("musico.cultos", "culto")
      .where(`voz.nome = '${data.voz}'`)
      .andWhere(`culto.nome = '${data.culto}'`)
      .andWhere(`musico.id NOT IN ('${data?.execao.join("','") || ""}')`)
      .orderBy("musico_culto.qtd_tocada", "ASC")
      .getMany();
    
    res.status(StatusCodes.OK).json(resultado);
  }
}

export { MusicoController }