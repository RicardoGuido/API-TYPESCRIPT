//Responsável por definir os endpoints da API e direcionar as requisções

import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();
router.get("/usuarios", usuarioController.getAllUsuarios);

export default router;
