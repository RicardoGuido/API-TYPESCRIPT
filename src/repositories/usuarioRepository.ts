import Usuario from "../models/usuario.js";

const usuarios: Usuario[] = [];
//usuarios do tipo "array" ou "vetor" de usuários

async function getUsuarios(id: number): Promise<Usuario | undefined> {
  return new Promise((resolve, reject) => {
    return resolve(usuarios.find((usuario) => usuario.id === id));
  });
}

async function getAllUsuarios(): Promise<Usuario[]> {
  return new Promise((resolve, reject) => {
    return resolve(usuarios);
  });
}
// resolve Cumpre a promessa com valor
//reject Rejeita a promessa com um erro

async function addUsuario(usuario: Usuario): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    if (!usuario.nome || !usuario.senha) {
      return reject(new Error("Dados de usuário inválidos"));
    }

    const novoUsuario = new Usuario(usuario.id, usuario.nome, usuario.senha);
    usuarios.push(novoUsuario);
    return resolve(novoUsuario);
  });
}

async function deleteUsuario(id: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);
    if (usuarioIndex === -1) {
      return resolve(false);
    }
    usuarios.splice(usuarioIndex, 1);
    return resolve(true);
  });
}

async function updateUsuario(
  id: number,
  dadosUsuario: Usuario,
): Promise<Usuario> {
  return new Promise((resolve, reject) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) {
      return reject(new Error("Usuário não encontrado"));
    }

    const usuarioEncontrado = usuarios[usuarioIndex]!;

    if (dadosUsuario.nome && usuarioEncontrado.nome !== dadosUsuario.nome) {
      usuarioEncontrado.nome = dadosUsuario.nome;
    }

    if (dadosUsuario.senha && usuarioEncontrado.senha !== dadosUsuario.senha) {
      usuarioEncontrado.senha = dadosUsuario.senha;
    }

    return resolve(usuarioEncontrado);
  });
}

export default {
  getUsuarios,
  getAllUsuarios,
  addUsuario,
  deleteUsuario,
  updateUsuario,
};
