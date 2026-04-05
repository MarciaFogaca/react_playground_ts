import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Contador from './pages/contador/Contador';
import Tarefa from './pages/tarefa/Tarefa';
import './App.css';


// para comentar dentro do return, tem q usar {/* */} e  /* */ fora do return
// props são imutaveis.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          <Home 
            titulo="Postagem do Playground" 
            texto="Este são os testes em React!" 
            batatinha="Desenvolvido para estudos de React" 
          />
        } />

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/tarefa" element={<Tarefa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;