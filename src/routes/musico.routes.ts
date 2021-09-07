import { Router } from "express";
import { InstrumentoController } from "../controllers/InstrumentoController";
import { MusicoController } from "../controllers/MusicoController";
import { NivelController } from "../controllers/NivelController";

const musicoRoutes = Router();
const musicoController = new MusicoController();
const nivelController = new NivelController();
const instrumentoController = new InstrumentoController();

musicoRoutes.get('/musicos', musicoController.getAllMusicos);
musicoRoutes.get('/musicos/:id', musicoController.getOne);
musicoRoutes.get('/musicos/:culto/:voz', musicoController.getByVozAndCulto);
musicoRoutes.post('/musicos', musicoController.createMusico);

musicoRoutes.get('/niveis', nivelController.getAllNiveis);
musicoRoutes.get('/instrumentos', instrumentoController.getAllInstrumentos);

export { musicoRoutes }