import { useState } from "react"
import Home from "../home/Home";

function Login() {

  const [isLogged, setIsLogged ] = useState<boolean>(false);

  return (
    <>
      {
        isLogged ? (
        <Home
        titulo="postagem 01"
        texto="Texto da postagem 01"
        />
        ):(
          <div>
            <h1>Login</h1>
            <button onClick={() => setIsLogged(true)}>Entrar</button>
          </div>
        )
      }
    </>
  )
}

export default Login 