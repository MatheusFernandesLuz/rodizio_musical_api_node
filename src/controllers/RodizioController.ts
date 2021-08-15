import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Musico } from "../models/Musico";

interface GetRodizio {
  soprano: number;
  contralto: number;
  tenor: number;
  baixo: number;
  culto: string;
}

class RodizioController {
  async getRodizio(req: Request, res: Response) {
    const data = req.body as GetRodizio;
    const repo = getRepository(Musico);
    let musicos: Musico[] = [];

    const vozes = [
      {
        voz: "SOPRANO",
        qtd: data.soprano
      },
      {
        voz: "CONTRALTO",
        qtd: data.contralto
      },
      {
        voz: "TENOR",
        qtd: data.tenor

      },
      {
        voz: "BAIXO",
        qtd: data.baixo
      }
    ];

    for (let i = 0; i < vozes.length; i++) {
      let m = await repo.createQueryBuilder("musico")
      .leftJoinAndSelect("musico.vozes", "voz")
      .leftJoinAndSelect("musico.cultos", "culto")
      .where(`voz.nome = '${vozes[i].voz}'`)
      .andWhere(`culto.nome = '${data.culto}'`)
      .orderBy("musico_culto.qtd_tocada", "ASC")      
      .limit(vozes[i].qtd)
      .getMany();
      
      musicos.push(...m);
    }

    return res.status(StatusCodes.OK).json(musicos);
  }
}

export { RodizioController }