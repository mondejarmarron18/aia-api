import { Router } from "express";
import assisstantAskController from "../../controllers/assisstantController";

const assisstantRoute = Router();

assisstantRoute.get("/", assisstantAskController.default);
assisstantRoute.post("/ask", assisstantAskController.ask);

export default assisstantRoute;
