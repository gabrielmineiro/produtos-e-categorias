import { Router } from "express";
import atualizaProdutosController from "../controllers/atualizaProdutos.controller.js";
import criarProdutoController from "../controllers/criarProduto.controller.js";
import deletaProdutosController from "../controllers/deletaProdutos.controller.js";
import listarProdutosController from "../controllers/listarProdutos.controller.js";
import listarProdutosCategoriaController from "../controllers/listarProdutosCategoria.controller.js";
import listarProdutosIdController from "../controllers/listarProdutosId.controller.js";

const router = Router();

router.get("", listarProdutosController);
router.get("/:id", listarProdutosIdController);
router.get("/category/:id", listarProdutosCategoriaController);
router.post("", criarProdutoController);
router.patch("/:id", atualizaProdutosController);
router.delete("/:id", deletaProdutosController);

export default router;
