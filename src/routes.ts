import { Router } from "express";
import type { Request, Response } from "express";
import AlunoController from "./controller/AlunoController.js";
import LivroController from "./controller/LivroController.js";
import EmprestimoController from "./controller/EmprestimoController.js"; 

const router = Router();

router.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ mensagem: "Olá, seja bem-vindo" });
});

router.get("/api/Aluno", AlunoController.todos);
// router.post("/api/Cadastraraluno", AlunoController.novo);

router.get("/api/Livro", LivroController.todos);
// router.post("/api/Cadastrarlivro", LivroController.novo);

router.get("/api/Emprestimo", EmprestimoController.todos);

export { router };
