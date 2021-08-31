import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getCustomRepository, getRepository } from "typeorm";
import { IMusicoRodizio, MusicoRepository } from "../database/repo/MusicoRepository";
import { RodizioRepository } from "../database/repo/RodizioRepository";
import { GenerateRodizioRequest } from "../interfaces/requests/generateRodizioRequest";
import { Culto } from "../models/Culto";

interface IResultadoRodizio {
  id: number;
  data: Date;
  culto: string;
  musicos: IMusicoRodizio[];
}

class RodizioController {
  async geraRodizio(req: Request, res: Response) {
    const data = req.body as GenerateRodizioRequest;
    const repo_rodizio = getCustomRepository(RodizioRepository);
    const culto_repo = getRepository(Culto);

    const newRodizio = await repo_rodizio.save({
      culto_id: (await culto_repo.findOne({where: {nome: data.culto}})).id,
      data_rodizio: data.data
    });   

    const musicos = await repo_rodizio.SelecionaMusicos({
      rodizio_id: newRodizio.id,
      culto: data.culto,
      soprano: data.soprano,
      contralto: data.contralto,
      tenor: data.tenor,
      baixo: data.baixo
    })

    newRodizio.musicos = musicos;
    await repo_rodizio.save(newRodizio);
    return res.status(StatusCodes.CREATED).json(newRodizio);
  }

  async regerarRodizio(req: Request, res: Response) {
    const data = req.body as GenerateRodizioRequest;
    const { id } = req.params;
    const repo_rodizio = getCustomRepository(RodizioRepository);

    const rodizio = await repo_rodizio.findOne({ relations: ["musicos"], where: { id } });
    console.log(rodizio);
    await repo_rodizio.RetiraDoRodizio(rodizio.id, rodizio.musicos);    
    
    const novosMusicos = await repo_rodizio.SelecionaMusicos({
      rodizio_id: rodizio.id,
      culto: data.culto,
      soprano: data.soprano,
      contralto: data.contralto,
      tenor: data.tenor,
      baixo: data.baixo
    });
    
    rodizio.data_rodizio = data.data;
    rodizio.musicos = novosMusicos;
    
    await repo_rodizio.save(rodizio);
    return res.status(StatusCodes.CREATED).json(rodizio);
  }

  async getRodizio(req: Request, res: Response) {
    const { id } = req.params;
    const repo_musico = getCustomRepository(MusicoRepository);
    const repo_rodizio = getCustomRepository(RodizioRepository);

    const resultado: IResultadoRodizio = { id: null, culto: null, data: null, musicos: [] };

    await repo_rodizio.BuscaRodizio(id)
    .then(r => {
      resultado.id = r.id,
      resultado.data = r.data_rodizio,
      resultado.culto = r.culto
    });

    const musicos = await repo_musico.BuscaMusicosPorRodizio(id);
    resultado.musicos = musicos;

    return res.status(StatusCodes.OK).json(resultado);
  }

  async findAll(req: Request, res: Response) {
    const repo = getCustomRepository(RodizioRepository);
    const result = await repo.BuscaTodosRodizios();    
    return res.status(StatusCodes.OK).json(result);
  }

  async deletaRodizio(req: Request, res: Response) {
    const repo = getCustomRepository(RodizioRepository);
    const { id } = req.params;

    const result = repo.DeletaRodizio(parseInt(id));

    return res.status(StatusCodes.OK).json(result);
  }

  async trocaVozMusico(req: Request, res: Response) {
    const data = req.body;
    const repo = getCustomRepository(RodizioRepository);
    const result = repo.TrocaVozMusico(data.rodizio_id, data.musico_id, data.voz_id);    
    return res.status(StatusCodes.OK).json(result);
  }
  
  async trocaMusicoRodizio(req: Request, res: Response) {
    const { rodizio_id, antigo_id, novo_id } = req.body;
    const result = await getCustomRepository(RodizioRepository).TrocaMusicoRodizio(rodizio_id, antigo_id, novo_id);
    return res.status(StatusCodes.CREATED).json(result);
  }
}

export { RodizioController }