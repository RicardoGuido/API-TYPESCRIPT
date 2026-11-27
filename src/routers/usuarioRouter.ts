//Responsável por definir os endpoints da API e direcionar as requisções

import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = express.Router();
router.get("/:id", usuarioController.getUsuario);
router.get("/", usuarioController.getAllUsuarios);

router.post("/", usuarioController.postUsuario);

router.delete("/:id", usuarioController.deleteUsuario);
router.patch("/:id", usuarioController.updateUsuario);
export default router;
