import { Router } from "express";
import { RodizioController } from "../controllers/RodizioController";

const rodizioRoutes = Router();
const rodizioController = new RodizioController();

rodizioRoutes.get('/franco', rodizioController.obterMusicoFranco);
rodizioRoutes.get('/rodizio', rodizioController.getRodizio);

export { rodizioRoutes };