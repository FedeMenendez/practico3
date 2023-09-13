//import logo from './logo.svg';

import React, { useState } from "react";
import Nombre from './Nombre.js';
import './App.css';
//import Jugar from "./Jugar";
import Seleccion from './Seleccion.js';
import Selecc from './Selecc.js';

// function determinarGanador (){
//     console.log ("usuario "+ jugadaUsuario);
//     console.log ("PC "+ jugadaComputadora);
//     if ( (jugadaComputadora === "piedra" && jugadaUsuario === "tijera")||
//     (jugadaComputadora === "papel" && jugadaUsuario==="piedra")||
//     (jugadaComputadora === "tijera" && jugadaUsuario === "papel")){
//         return "Gana PC";
//     }
//     else if ( (jugadaComputadora === "tijera" && jugadaUsuario === "piedra")||
//     (jugadaComputadora === "piedra" && jugadaUsuario==="papel")||
//     (jugadaComputadora === "papel" && jugadaUsuario === "tijera")){
//       console.log ("Gana Jugador");
//         return "Gana Jugador"
//     }
//     else{
//       //console.log ("Empate")
//       return "empate";
//   }
//}
function App() {
  //const [nombre,setNombre]=useState ('');
  const [jugadaUsuario,setJugadaUsuario]= useState ('');
  const [jugadaComputadora,setJugadaComputadora]=useState ('');
  return (
    <div className="App">
      <Nombre/>
      <Seleccion setJugadaUsuario={setJugadaUsuario}/>
      <p>La jugada del usuario es: {jugadaUsuario}</p>
      <Selecc setJugadaComputadora={setJugadaComputadora}/>
       <p>La jugada de la computadora es: {jugadaComputadora}</p> 
    </div>
  );
}

export default App;
