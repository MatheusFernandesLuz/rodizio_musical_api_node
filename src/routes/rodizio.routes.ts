import { Router } from "express";
import { RodizioController } from "../controllers/RodizioController";

const rodizioRoutes = Router();
const rodizioController = new RodizioController();

rodizioRoutes.get("/rodizio", rodizioController.findAll);
rodizioRoutes.post('/rodizio/gerar', rodizioController.geraRodizio);
rodizioRoutes.get('/rodizio/:id', rodizioController.getRodizio);
rodizioRoutes.post('/rodizio/musico/voz', rodizioController.trocaVozMusico);
rodizioRoutes.patch('/rodizio/musico/trocar', rodizioController.trocaMusicoRodizio);

export { rodizioRoutes };