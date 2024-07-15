import { Router } from "express";
import assisstantRoute from "./assisstantRoute";

const routes = Router();

//Default route
routes.get("/", (req, res) => {
  res.send(
    "Hi, there!\nThis is the Assisstant API!\nTo acccess it, visit: <base_url>/assisstant"
  );
});

routes.use("/assisstant", assisstantRoute);

export default routes;
