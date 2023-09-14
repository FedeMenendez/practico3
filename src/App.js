//import logo from './logo.svg';

import React, { useState } from "react";
import Nombre from './Nombre.js';
import './App.css';
import Jugar from "./Jugar";
import Seleccion from './Seleccion.js';
import Selecc from './Selecc.js';


function App() {
  //const [nombre,setNombre]=useState ('');
  const [jugadaUsuario,setJugadaUsuario]= useState ('');
  const [jugadaComputadora,setJugadaComputadora]=useState ('');
  let habilitar = true;
  return (
    <div className="App">
      <Nombre/>
      <Seleccion setJugadaUsuario={setJugadaUsuario} />
      <p>La jugada del usuario es: {jugadaUsuario}</p>
      <Selecc setJugadaComputadora={setJugadaComputadora}/>
       <p>La jugada de la computadora es: {jugadaComputadora}</p> 
       
       <Jugar jugadaComputadora={jugadaComputadora} jugadaUsuario={jugadaUsuario} habilitar={habilitar}/>
       
    </div>
  );
}

export default App;
