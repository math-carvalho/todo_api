// Lógica para gerenciamento da To-Do List

import type { Tarefa } from "../models/Tarefa.js"

// Lista de tarefas
const tasks: Tarefa[] = [];

// Interface de criação de tarefa
interface CriarTarefa {
    title: string;
}

// Interface de atualização de tarefa
interface AtualizarTarefa {
    title?: string;
    completed?: boolean;
}

// Classe de Tarefa
export class TarefaService {
    // Cria tarefa
    create({ title }: CriarTarefa) {
        // Verifica se título da tarefa foi informado
        if (!title) {
            throw new Error("Título da tarefa não informado");
        }

        // Declara nova tarefa
        const newTask: Tarefa = {id: Math.random(), title: title, completed: false};

        // Atualiza lista de tarefas
        tasks.push(newTask);

        return newTask;
    }

    // Lista tarefas
    list() {
        return tasks;
    }

    // Busca tarefa por ID
    getById(id: number) {
        const task = tasks.find((t) => t.id === id);
        if (!task) {
            throw new Error("Tarefa não encontrada");
        }
        return task;
    }

    // Atualiza tarefa
    update(id: number, { title, completed }: AtualizarTarefa) {
        const task = tasks.find((t) => t.id === id);
        if (!task) {
            throw new Error("Tarefa não encontrada");
        }

        if (title !== undefined) {
            task.title = title;
        }
        if (completed !== undefined) {
            task.completed = completed;
        }

        return task;
    }

    // Deleta tarefa
    delete(id: number) {
        const index = tasks.findIndex((t) => t.id === id);
        if (index === -1) {
            throw new Error("Tarefa não encontrada");
        }

        tasks.splice(index, 1);
    }
}