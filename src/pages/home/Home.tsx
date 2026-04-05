import React from "react";

interface HomeProps {
  titulo: string;
  texto: string;
  batatinha?: string; 
}

function Home(props: HomeProps) {
  return (
    // Adicionei uma borda e padding para dar um visual de "card"
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h1>Componente Home</h1>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
      
      {props.batatinha && <p>Extra: {props.batatinha}</p>}
    </div>
  );
}

export default Home;