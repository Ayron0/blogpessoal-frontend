function Home() {
  return (
    <>
      <div >
        <div>
          <div>
            <h2>
              Seja Bem vindo
            </h2>
            <p>
              Expresse aqui seus pensamentos e opniões
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem', 
              }}
            >
              <div 
                style={{
                  borderRadius: '0.5rem',
                  color: 'white',
                  border: '2px solid white',
                  padding: '0.5rem 1rem'
                }}
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                
              }}
          >
            <img 
              src="https://i.imgur.com/fyfri1v.png" 
              alt="Imagem pagina Home" 
              style={{width: '66%'}} 
            />
          </div>
        </div>
      </div>
    </>    
  )
}

export default Home