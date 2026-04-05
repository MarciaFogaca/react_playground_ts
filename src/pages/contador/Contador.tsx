import { useState } from 'react';

function Contador() {

  //Definindo o Estado chamado contador.
  //Definindo a função sestate setcontador.
  const [valor, setValor] = useState<number>(0);
  const [batatinha, setBatatinha] = useState<number>(0);
  
  function incrementar() {
    setValor(valor + 1);
    setBatatinha(batatinha + 2);
  }

  function decrementar() {
    setValor(valor - 1);
    setBatatinha(batatinha - 2);
  }

  return (
    <div>
      <h1>Componente Contador</h1>
      <h2>valor: {valor}</h2>
      <h2>batatinha: {batatinha}</h2>
      
      <button onClick={incrementar}>Incrementar ++</button>
      <button onClick={decrementar}>Decrementar --</button>
    </div>
  );
}

export default Contador;