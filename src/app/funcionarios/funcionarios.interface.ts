export interface Funcionario {
  id?: number;
  matricula: string;
  nome: string;
  email: string;
  cpf?: number;
  dataNascimento?: Date;
  dataAdmissao?: Date;
  dataDemissao?: Date;
  cargaHoraria?: string;
  setor: string;
  funcao: string;
}
