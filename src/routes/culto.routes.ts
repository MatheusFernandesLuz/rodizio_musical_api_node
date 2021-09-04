import { Router } from "express";
import { CultoController } from "../controllers/CultoController";

const cultoRoutes = Router();
const cultoController = new CultoController();

cultoRoutes.get('/cultos', cultoController.getAllCultos);

export { cultoRoutes }