export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  token: string;
}

// No Projeto Blog Pessoal, desenvolvido com o Framework NestJS, a Classe Entidade (Model) UsuarioLogin contém apenas dois atributos: usuario e senha.

// Entretanto, ao efetuar login na API, o objeto retornado pelo Backend inclui todos os dados do usuário, além do Token JWT.

// Por esse motivo, a Model UsuarioLogin no Frontend foi construída para incluir todos esses atributos, permitindo que a aplicação manipule corretamente as informações recebidas.

