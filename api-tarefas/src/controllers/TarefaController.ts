// Valida formato dos dados

import type { Request, Response } from "express";
import { TarefaService } from "../services/TarefaService.js";

// Instância de TarefaService
const service = new TarefaService();

// Classe que controla Tarefa
export class TarefaController {
    // Controla rota de criar tarefa
    create(req: Request, res: Response) {
        // Tenta criar tarefa de acordo com requisição
        try {
            const { title } = req.body;
            const task = service.create({ title });

            return res.status(201).json(task);
        } catch {
            return res.status(400).json("Erro ao criar tarefa");
        }
    }

    // Controla rota de listar tarefas
    list(req: Request, res: Response) {
        const tasks = service.list();
        
        return res.status(200).json(tasks);
    }

    // Controla rota de buscar tarefa por ID
    getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const task = service.getById(Number(id));

            return res.status(200).json(task);
        } catch {
            return res.status(404).json("Tarefa não encontrada");
        }
    }

    // Controla rota de atualizar tarefa
    update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, completed } = req.body;
            const task = service.update(Number(id), { title, completed });

            return res.status(200).json(task);
        } catch {
            return res.status(404).json("Tarefa não encontrada");
        }
    }

    // Controla rota de deletar tarefa
    delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            service.delete(Number(id));
            
            return res.status(204).send();
        } catch {
            return res.status(404).json("Tarefa não encontrada");
        }
    }
}