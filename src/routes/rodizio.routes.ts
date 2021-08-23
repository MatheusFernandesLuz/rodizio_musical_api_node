import { Router } from "express";
import { RodizioController } from "../controllers/RodizioController";

const rodizioRoutes = Router();
const rodizioController = new RodizioController();

rodizioRoutes.post('/rodizio/gerar', rodizioController.geraRodizio);
rodizioRoutes.get('/rodizio/:data', rodizioController.getRodizio);

export { rodizioRoutes };