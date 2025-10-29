import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import type Tema from "../../../model/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from 'react-spinners';


function DeletarTema() {

  const navigate = useNavigate();
  const [tema, setTema] = useState<Tema>({} as Tema)
  const[isLoading, setIsLoading] = useState<boolean>(false)

  const {usuario, handleLogout} = useContext(AuthContext)
  const token = usuario.token

  const {id} = useParams<{id: string}>();

  async function buscarPor(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: { Authorization: token} 
      })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }


  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/")
    }
  }, [token])
    
  useEffect(() => {
    if(id !== undefined) {
      buscarPor(id)
    }
  },[id])

  async function deletarTema() {
    setIsLoading(true)

    try {
      await deletar(`/temas/${id}`, {
        headers: { Authorization: token }
      })
      alert("Tema deletado com sucesso!")
      navigate("/temas")
    } catch (error: any) {
      if (error.toString().includes('401')) {
          handleLogout();
        } else {
          alert('Erro ao deletar o tema.')
        }
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/temas")
  }

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between w-90">
      <header className="py-2 px-6 bg-indigo-800  text-white font-bold text-2xl">Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

      <div className="flex">
        <button className=" text-slate-100 bg-red-400 hover:bg-red-700 w-full py-2"
          onClick={retornar}
        >
          Não
        </button>

        <button className="text-slate-100 bg-indigo-400 hover:bg-indigo-800
          flex items-center justify-center"
          onClick={deletarTema}
          
        >
          {isLoading ? 
            <ClipLoader 
              color="#ffffff" 
              size={20} 
            /> :
            <span>Sim</span>
          }
        </button>
        

      </div>

    </div>
  )
}

export default DeletarTema