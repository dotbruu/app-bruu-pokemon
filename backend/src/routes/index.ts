import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import PokemonController from "controllers/PokemonsController";

const routes = Router();
const upload = multer(uploadConfig.multer);
const pokemonController = new PokemonController();

routes.get("/", pokemonController.index);
routes.get("/search", pokemonController.search);
routes.post("/", upload.single("file"), pokemonController.create);

export default routes;
