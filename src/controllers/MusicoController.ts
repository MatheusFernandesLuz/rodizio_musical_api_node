import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getRepository } from "typeorm";
import { Musico } from "../models/Musico";

class MusicoController {
  async getAllMusicos(req: Request, res: Response) {
    const repo = getRepository(Musico);
    //const musicos = await repo.find();

    const musicos = await repo.find({relations: ["nivel","cultos","vozes"]})

    return res.status(StatusCodes.OK).json(musicos);
  }
}

export { MusicoController }