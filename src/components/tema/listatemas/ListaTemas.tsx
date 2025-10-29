import { useEffect, useState, useContext } from "react";
import CardTema from "../cardtema/CardTema"
import { buscar } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
import type Tema from "../../../model/Tema";
import { AuthContext } from "../../../contexts/AuthContext";

function ListaTemas() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [temas, setTemas] = useState<Tema[]>([])

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      navigate("/")
    }
  }, [token])
  
  useEffect(() => {
      buscarTemas()
  },[temas.length])

  async function buscarTemas(){
    try {
      setIsLoading(true)

      await buscar('/temas', setTemas, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout()
        }
    } finally {
        setIsLoading(false)
    }
  }

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="containner flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardTema />
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaTemas