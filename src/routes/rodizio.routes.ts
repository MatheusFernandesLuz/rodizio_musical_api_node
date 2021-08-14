import { Router } from "express";
import { RodizioController } from "../controllers/RodizioController";

const rodizioRoutes = Router();
const rodizioController = new RodizioController();

rodizioRoutes.get('/franco', rodizioController.obterMusicoFranco);
rodizioRoutes.post('/rodizio/gerar', rodizioController.getRodizio);

export { rodizioRoutes };