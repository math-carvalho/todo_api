// Mapeia rotas 

import { Router } from "express";
import { TarefaController } from "../controllers/TarefaController.js";

const taskRoutes = Router();
const controller = new TarefaController();

// Mapeia método POST
taskRoutes.post("/", (req, res) => controller.create(req, res));

// Mapeia método GET - listar todas
taskRoutes.get("/", (req, res) => controller.list(req, res));

// Mapeia método GET - por ID
taskRoutes.get("/:id", (req, res) => controller.getById(req, res));

// Mapeia método PUT - atualizar
taskRoutes.put("/:id", (req, res) => controller.update(req, res));

// Mapeia método DELETE
taskRoutes.delete("/:id", (req, res) => controller.delete(req, res));

export { taskRoutes };