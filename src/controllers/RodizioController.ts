import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getConnection, getCustomRepository, getRepository } from "typeorm";
import { IMusicoRodizio, MusicoRepository } from "../database/repo/MusicoRepository";
import { RodizioRepository } from "../database/repo/RodizioRepository";
import { GenerateRodizioRequest } from "../interfaces/requests/generateRodizioRequest";
import { Culto } from "../models/Culto";
import { Musico } from "../models/Musico";
import { Rodizio } from "../models/Rodizio";

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
    const repo_musicos = getCustomRepository(MusicoRepository);
    const culto_repo = getRepository(Culto);
    let MusicosRodizio: Musico[] = [];

    const vozes = [
      { id: 1, qtd: data.soprano },
      { id: 2, qtd: data.contralto },
      { id: 3,qtd: data.tenor },
      { id: 4, qtd: data.baixo }
    ];
    
    const newRodizio = await repo_rodizio.save({
      culto_id: (await culto_repo.findOne({where: {nome: data.culto}})).id,
      data_rodizio: data.data
    });   

    for (let i = 0; i < vozes.length; i++) {
      const voz = vozes[i];      
      let alreadyIncluded = MusicosRodizio.map(m => m.id);
      
      await repo_musicos
        .BuscaMusicosPorVozECulto(voz.id, data.culto, voz.qtd, alreadyIncluded)
        .then(musicos => {
          for (let i = 0; i < musicos.length; i++) {
            const musico = musicos[i];
            repo_musicos.InsereNoRodizio(musico.id, newRodizio.id, voz.id);
            MusicosRodizio.push(musico);            
          }
        });
    }
    
    return res.status(StatusCodes.CREATED).json(newRodizio);
  }

  async getRodizio(req: Request, res: Response) {
    const { id } = req.params;
    const repo_musico = getCustomRepository(MusicoRepository);
    const repo_rodizio = getCustomRepository(RodizioRepository);

    const resultado: IResultadoRodizio = { id: null, culto: null, data: null, musicos: [] };

    await repo_rodizio.BuscaRodizioPorData(id)
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
    const result = await getConnection()
      .createQueryBuilder()
      .select("rodizio.id, rodizio.data_rodizio as data, culto.nome as culto")
      .from(Rodizio, "rodizio")
      .leftJoin(Culto, "culto", "rodizio.culto_id = culto.id")
      .getRawMany();
    
    return res.status(StatusCodes.OK).json(result);
  }
}

export { RodizioController }