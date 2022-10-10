import { Router } from "express";
import atualizaCategoriaController from "../controllers/atualizaCategoria.controller.service.js";
import criarCategoriaController from "../controllers/criarCategoria.controller.js";
import deleteCategoriaController from "../controllers/deleteCategoria.controller.js";
import listarCategoriaController from "../controllers/listarCategoria.controller.js";
import listarCategoriaIdController from "../controllers/listarCategoriaId.controller.js";

const router = Router();

router.get("", listarCategoriaController);
router.get("/:id", listarCategoriaIdController);
router.post("", criarCategoriaController);
router.patch("/:id", atualizaCategoriaController);
router.delete("/:id", deleteCategoriaController);
export default router;
