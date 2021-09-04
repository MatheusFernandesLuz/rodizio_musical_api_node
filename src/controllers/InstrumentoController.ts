import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Instrumento } from "../models/Instrumento";

class InstrumentoController {
  async getAllInstrumentos(req: Request, res: Response) {
    const repo = getRepository(Instrumento);
    const instrumento = await repo.find();    
    return res.status(StatusCodes.OK).json(instrumento);
  }
}

export { InstrumentoController }