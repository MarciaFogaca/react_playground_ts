import { useEffect, useState } from "react";

function Tarefa() {
  
  const [tarefa, setTarefa] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if(completed) {
      setTarefa("Parabéns, você concluiu a tarefa!");
    }

  }, [completed]);
  
  return (
    <div>
      <h1> Componente Tarefa</h1>
      <h2>{tarefa}</h2>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir 
        Tarefa</button>
    </div>
  );
}

export default Tarefa;
