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
  async obterMusicoFranco(req: Request, res: Response) {
    const data = req.body;
    const repo = getRepository(Musico);

    const franco = await repo.createQueryBuilder("musico")
      .leftJoinAndSelect("musico.cultos", "culto")
      .leftJoinAndSelect("musico.vozes", "voz")
      .where(`culto.nome = '${data.culto}'`)
      .andWhere(`voz.nome = '${data.voz}'`)
      .andWhere('musico.franqueza > 1')
      .take(1)
      .getMany();
  
    return res.status(StatusCodes.OK).json(franco);
  }
  
  async getRodizio(req: Request, res: Response) {
    const data = req.body as GetRodizio;
    const repo = getRepository(Musico);
    let resultado: Musico[] = [];

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

    // 1 - Buscar um músico franco de cada voz
    for (let i = 0; i < vozes.length; i++) {

      let franco = await repo.createQueryBuilder("musico")
      .leftJoin("musico.vozes", "voz")
      .leftJoin("musico.cultos", "culto")
      .where(`voz.nome = '${vozes[i].voz}'`)
      .andWhere(`culto.nome = '${data.culto}'`)
      .andWhere("musico.franqueza > 1")
      .orderBy("musico.qtd_tocada", "ASC")
      .getOne();
      
      resultado.push(franco);

      let limit = vozes[i].qtd - 1;
      
      if (limit > 0) {
        let outros = await repo.createQueryBuilder("musico")
        .leftJoin("musico.vozes", "voz")
        .leftJoin("musico.cultos", "culto")
        .where(`voz.nome = '${vozes[i].voz}'`)
        .andWhere(`culto.nome = '${data.culto}'`)
        .andWhere(`musico.id NOT IN ('${franco.id}')`)
        .orderBy("musico.qtd_tocada", "ASC")      
        .limit(limit)
        .getMany();
        
        resultado.push(...outros);
      }
    }

    return res.status(StatusCodes.OK).json(resultado);
  }
}

export { RodizioController }