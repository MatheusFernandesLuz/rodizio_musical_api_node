import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getCustomRepository } from "typeorm";
import { InstrumentoRepository } from "../database/repo/InstrumentoRepository";

class InstrumentoController {
  async getAllInstrumentos(req: Request, res: Response) {
    const repo = getCustomRepository(InstrumentoRepository);
    const instrumentos = await repo.ObterTodosInstrumento();
    
    return res.status(StatusCodes.OK).json(instrumentos);
  }
}

export { InstrumentoController }