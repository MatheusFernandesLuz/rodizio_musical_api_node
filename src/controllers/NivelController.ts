import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getCustomRepository } from "typeorm";
import { NivelRepository } from "../database/repo/NivelRepository";

class NivelController {
  async getAllNiveis(req: Request, res: Response) {
    const repo = getCustomRepository(NivelRepository);
    const niveis = await repo.ObterTodosNiveis();
    
    return res.status(StatusCodes.OK).json(niveis);
  }
}

export { NivelController }