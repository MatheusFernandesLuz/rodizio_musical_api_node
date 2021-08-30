import { Router } from "express";
import { MusicoController } from "../controllers/MusicoController";

const musicoRoutes = Router();
const musicoController = new MusicoController();

musicoRoutes.get('/musicos', musicoController.getAllMusicos);
musicoRoutes.get('/musicos/:culto/:voz', musicoController.getByVozAndCulto);

export { musicoRoutes }