import { createContext, type ReactNode, useState} from "react";
import type UsuarioLogin from "../model/UsuarioLogin";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
  usuario: UsuarioLogin
  handleLegout(): void
  handleLogin(dados: UsuarioLogin): Promise<void>
  isLoading: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: ""
  })

  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true)
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario)
      ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso")
    } catch (error) {
      ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro")
    } finally {
      setIsLoading(false)
    }
  }

  function handleLegout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    })
  }

  return (
    <AuthContext.Provider value={{ usuario, handleLegout, handleLogin, isLoading }}>
      {children}
    </AuthContext.Provider>
  );

};