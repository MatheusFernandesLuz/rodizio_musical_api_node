import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Nivel } from "../models/Nivel";

class NivelController {
  async getAllNiveis(req: Request, res: Response) {
    const repo = getRepository(Nivel);
    const niveis = await repo.find();    
    return res.status(StatusCodes.OK).json(niveis);
  }
}

export { NivelController }