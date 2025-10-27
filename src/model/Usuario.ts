import type Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto?: string;
  postagens?: Postagem[] | null; 
}

//O Operador de Encadeamento Opcional (?) junto do atributo postagem sinaliza que o preenchimento deste campo é opcional. 
// O símbolo de pipe (|) indica que a propriedade pode ter mais de um tipo de dado, funcionando como um “OU” lógico.