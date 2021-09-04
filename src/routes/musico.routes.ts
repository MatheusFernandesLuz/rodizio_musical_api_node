import { Router } from "express";
import { InstrumentoController } from "../controllers/InstrumentoController";
import { MusicoController } from "../controllers/MusicoController";
import { NivelController } from "../controllers/NivelController";

const musicoRoutes = Router();
const musicoController = new MusicoController();
const nivelController = new NivelController();
const instrumentoController = new InstrumentoController();

musicoRoutes.get('/musicos', musicoController.getAllMusicos);
musicoRoutes.get('/musicos/:culto/:voz', musicoController.getByVozAndCulto);

musicoRoutes.get('/musicos/niveis', nivelController.getAllNiveis);
musicoRoutes.get('/musicos/instrumentos', instrumentoController.getAllInstrumentos);

export { musicoRoutes }