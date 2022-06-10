import express, { Router } from "express";
import CategoryController from "../controllers/categoryController.js";

const rotas = express.Router();

rotas
    .get("/category", CategoryController.listarNomes)
    .get("/category/:id", CategoryController.listID)
    .post("category", CategoryController.cadastrarNome)
    .put("/category/:id", CategoryController.atualizarNome)
    .delete("/category/:id", CategoryController.excluirNome)

export default rotas;

