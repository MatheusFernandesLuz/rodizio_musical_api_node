import { Router } from "express";
import { RodizioController } from "../controllers/RodizioController";

const rodizioRoutes = Router();
const estadoController = new RodizioController();

rodizioRoutes.get('/sabado', estadoController.obterMusicosSabado);

export { rodizioRoutes };