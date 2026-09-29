import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main>
        <h2>404</h2>
        <p>Ops! Página não encontrada</p>
        <p>Parece que você se perdeu mo mapa do Jogo. A fase que que você está procurando não existe ou foi encerrada</p>
        <Link to="/">Voltar para Home</Link>
      
    </main>
  )
}

export default Error
