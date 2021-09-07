import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getCustomRepository, getRepository } from "typeorm";
import { InstrumentoRepository } from "../database/repo/InstrumentoRepository";
import { MusicoRepository } from "../database/repo/MusicoRepository";
import { NivelRepository } from "../database/repo/NivelRepository";
import { Culto } from "../models/Culto";
import { Musico } from "../models/Musico";
import { Voz } from "../models/Voz";

interface IMusicoRequest {
  id?: number;
  nome: string;
  celular: string;
  instrumento: number;
  nivel: number;
  voz_principal: number;
  vozes_alternativas: number[];
  cultos: number[];
};

class MusicoController {
  async getAllMusicos(req: Request, res: Response) {
    const repo = getRepository(Musico);

    const musicos = await repo
      .createQueryBuilder("musicos")
      .leftJoinAndSelect("musicos.instrumento", "instrumento")
      .leftJoinAndSelect("musicos.nivel", "nivel")
      .leftJoinAndSelect("musicos.vozes", "voz")
      .leftJoinAndSelect("musicos.cultos", "culto")
      .getMany();
    
    return res.status(StatusCodes.OK).json(musicos);
  }

  async getByVozAndCulto(req: Request, res: Response) {
    const { voz, culto } = req.params;
    const repo = getRepository(Musico);
    
    const resultado = await repo
      .createQueryBuilder("musico")
      .leftJoinAndSelect("musico.instrumento", "instrumento")
      .leftJoinAndSelect("musico.nivel", "nivel")
      .leftJoinAndSelect("musico.vozes", "voz")
      .leftJoinAndSelect("musico.cultos", "culto")
      .where(`voz.id = '${voz}'`)
      .andWhere(`culto.id = '${culto}'`)
      .orderBy("musico_culto.qtd_tocada", "ASC")
      .getMany();
    
    return res.status(StatusCodes.OK).json(resultado);
  }

  async getOne(req: Request, res: Response) {
    const id = req.params.id;
    const repo = getCustomRepository(MusicoRepository);
    const result = await repo.BuscarUmMusico(id);

    return res.status(StatusCodes.OK).json(result);
  }

  async createMusico(req: Request, res: Response) {
    const dados = req.body as IMusicoRequest;

    const repo_musico = getCustomRepository(MusicoRepository);
    const repo_instrumento = getCustomRepository(InstrumentoRepository);
    const repo_nivel = getCustomRepository(NivelRepository);
    const repo_vozes = getRepository(Voz);
    const repo_cultos = getRepository(Culto);

    const musico = new Musico();

    musico.id = dados.id || null;
    musico.nome = dados.nome;    
    musico.nome = dados.nome;
    musico.celular = dados.celular;
    musico.voz_principal = dados.voz_principal;
    
    musico.instrumento = await repo_instrumento.ObterUmInstrumento(dados.instrumento);
    musico.nivel = await repo_nivel.ObterUmNivel(dados.nivel);
    musico.vozes = [];
    musico.cultos = [];
    
    for (let i = 0; i < dados.vozes_alternativas.length; i++) {
      const voz_id = dados.vozes_alternativas[i];
      musico.vozes.push(await repo_vozes.findOne({ where: { id: voz_id } }));
    }

    for (let i = 0; i < dados.cultos.length; i++) {
      const culto_id = dados.cultos[i];
      musico.cultos.push(await repo_cultos.findOne({ where: { id: culto_id } }));
    }

    const created = await repo_musico.SaveMusico(musico);
    res.status(StatusCodes.CREATED).json(created);
  }
}

export { MusicoController }