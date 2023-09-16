//import logo from './logo.svg';

import React, { useState } from "react";
import Nombre from './Nombre.js';
import './App.css';
import Jugar from "./Jugar";
import Seleccion from './Seleccion.js';
//import Selecc from './Selecc.js';


function App() {
  //const [nombre,setNombre]=useState ('');
  const [jugadaUsuario,setJugadaUsuario]= useState ('');
  const [habilitarSeleccion,setHabilitacionSeleccion]=useState (true);
  //const [habilitarNombre,setHabilitarNombre] = useState ('false');
  //let habilitarSeleccion=true;
  return (
    <div className="App">
      <Nombre setHabilitacionSeleccion={setHabilitacionSeleccion}/>
      <Seleccion setJugadaUsuario={setJugadaUsuario} habilitarSeleccion={habilitarSeleccion}/>
           
      {/* <Selecc setJugadaComputadora={setJugadaComputadora}/> */}
       {/* <p>La jugada de la computadora es: {jugadaComputadora}</p>  */}
       
       <Jugar jugadaUsuario={jugadaUsuario} habilitarSeleccion={habilitarSeleccion} setHabilitacionSeleccion={setHabilitacionSeleccion}/>
       
    </div>
  );
}

export default App;
