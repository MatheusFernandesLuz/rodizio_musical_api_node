import { Router } from "express";
import { MusicoController } from "../controllers/MusicoController";

const musicoRoutes = Router();
const musicoController = new MusicoController();

musicoRoutes.get('/musicos', musicoController.getAllMusicos);
musicoRoutes.post('/musicos/trocar', musicoController.getByVozAndCulto);

export { musicoRoutes }