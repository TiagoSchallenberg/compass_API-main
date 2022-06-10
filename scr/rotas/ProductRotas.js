import express from "express";
import ProductController from  "../controllers/productController.js";

const rotas = express.Router();

rotas
    .get("/product", ProductController.listarProdutos)
    .get("/product/:id", ProductController.listID)
    .post("/product", ProductController.cadastrarProdutos)
    .put("/product/:id", ProductController.atualizarProdutos)
    .delete("/product/:id", ProductController.excluirProdutos)

export default rotas;



