import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class RodizioController {
  async obterMusicosSabado(req: Request, res: Response) {
    const data = req.body;

    return res.status(StatusCodes.OK).json(data);
  }
}

export { RodizioController }