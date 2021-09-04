import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Culto } from "../models/Culto";

class CultoController {
  async getAllCultos(req: Request, res: Response) {
    const repo = getRepository(Culto);
    const cultos = await repo.find();    
    return res.status(StatusCodes.OK).json(cultos);
  }
}

export { CultoController }