// Implementa tarefa

import express  from "express";
import { taskRoutes } from "./routes/TarefaRoutes.js";

const app = express();
const GATE = 3333;

app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(GATE, () => {
    console.log(`Servidor rodando na porta ${GATE}`);
});