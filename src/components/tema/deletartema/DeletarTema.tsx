

function DeletarTema() {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between w-90">
      <header className="py-2 px-6 bg-indigo-800  text-white font-bold text-2xl">Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

      <div className="flex">
        <button className=" text-slate-100 bg-red-400 hover:bg-red-700 w-full py-2"
        >
          Não
        </button>

        <button className="text-slate-100 bg-indigo-400 hover:bg-indigo-800
            flex items-center justify-center "
        >
          Sim
        </button>
        

      </div>

    </div>
  )
}

export default DeletarTema