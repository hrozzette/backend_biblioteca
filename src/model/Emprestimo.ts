import Emprestimo from "../model/Emprestimo.js";
import type { Request, Response } from "express";


class EmprestimoController {
  static async todos(req: Request, res: Response): Promise<Response> {
    try {
    
      const listarEmprestimos: Emprestimo[] = [
      
      ];

      return res.status(200).json(listarEmprestimos);
    } catch (error) {
      console.error(`Erro ao consultar modelo. ${error}`);
      return res
        .status(500)
        .json({ mensagem: "Não foi possível acessar a lista de empréstimos." });
    }
  }
}

export default EmprestimoController;
