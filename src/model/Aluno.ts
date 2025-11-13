import DatabaseModel from "./DatabaseModel.js";

const database = new DatabaseModel().pool; // Inicializa o pool de conexões com o banco de dados

class Aluno {
  private id_aluno: number = 0;
  private ra: string;
  private nome: string;
  private sobrenome: string;
  private data_nascimento: Date;
  private endereco: string;
  private email: string;
  private celular: string;

  constructor(
    _ra: string,
    _nome: string,
    _sobrenome: string,
    _data_nascimento: Date,
   _endereco: string,
    _email: string,
   _celular: string
  ) {
    this.ra = _ra;
    this.nome = _nome;
    this.sobrenome = _sobrenome;
    this.data_nascimento = _data_nascimento;
    this.endereco = _endereco;
    this.email = _email;
    this.celular = _celular;
  }

 public getIdAluno(): number {
    return this.id_aluno;
  }

  public getRa(): string {
    return this.ra;
  }

  public getNome(): string {
    return this.nome;
  }

  public getSobrenome(): string {
    return this.sobrenome;
  }

  public getNascimentoData(): Date {
    return this.data_nascimento;
  }

  public getEndereco(): string {
    return this.endereco;
  }

  public getEmail(): string {
    return this.email;
  }

  public getCelular(): string {
    return this.celular;
  }

  public setIdAluno(id_aluno: number): void {
    this.id_aluno = id_aluno;
  }

  public setRa(ra: string): void {
    this.ra = ra;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setSobrenome(sobrenome: string): void {
    this.sobrenome = sobrenome;
  }

  public setNascimentoData(data_nascimento: Date): void {
    this.data_nascimento = data_nascimento;
  }

  public setEndereco(endereco: string): void {
    this.endereco = endereco;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setCelular(celular: string): void {
    this.celular = celular;
  }

    static async listarAlunos(): Promise<Array<Aluno> | null> {
        try {
            // Cria uma lista vazia que irá armazenar os objetos do tipo Cliente
            let listaDeAlunos: Array<Aluno> = [];

            // Define a consulta SQL que irá buscar todos os registros da tabela 'clientes'
            const querySelectAlunos = `SELECT * FROM aluno;`;

            // Executa a consulta no banco de dados e aguarda a resposta
            const respostaBD = await database.query(querySelectAlunos);

            // Percorre cada linha retornada pela consulta
            respostaBD.rows.forEach((AlunoBD) => {
                // Cria um novo objeto Cliente usando os dados da linha atual (nome, cpf, telefone)
                const novoAluno: Aluno = new Aluno(
                  AlunoBD.ra,
                  AlunoBD.nome,
                  AlunoBD.sobrenome,
                  AlunoBD.data_nascimento,
                  AlunoBD.endereço,
                  AlunoBD.email,
                  AlunoBD.celular             
                );

                // Define o ID do cliente usando o valor retornado do banco
                novoAluno.setIdAluno(AlunoBD.id_cliente);

                // Adiciona o novo cliente à lista de clientes
                listaDeAlunos.push(novoAluno);
            });

            // Retorna a lista completa de clientes
            return listaDeAlunos;
        } catch (error) {
            // Em caso de erro na execução da consulta, exibe uma mensagem no console
            console.error(`Erro na consulta ao banco de dados. ${error}`);

            // Retorna null para indicar que houve uma falha na operação
            return null;
        }
    }
}

export default Aluno;