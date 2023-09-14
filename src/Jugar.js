//import Nombre from './Nombre.js';
//import Seleccion from './Seleccion.js';
//import Selecc from './Selecc.js';
import React from 'react';
import { useState } from 'react';
//let puntosJugador=0;
//let puntosComputadora=0;
function Jugar ({jugadaComputadora,jugadaUsuario}){
    const [puntosJugador, setPuntosJugador] = useState(0);
    const [puntosComputadora,setPuntosComputadora]=useState(0)
    const [resultado,setResultado]=useState('')
    const [habilitar, setInhabilitar]=useState ('');
    const [intentos, setIntentos]=useState (1);
    //let habilitar = false
    function determinarGanador (){
    if ( (jugadaComputadora === "piedra" && jugadaUsuario === "tijera")||
    (jugadaComputadora === "papel" && jugadaUsuario==="piedra")||
    (jugadaComputadora === "tijera" && jugadaUsuario === "papel")){
        console.log("Gana PC");
        setPuntosComputadora(puntosComputadora+1);
        //puntosComputadora +=1;
        console.log("puntos PC: "+ puntosComputadora);
        setResultado ("Gana PC");
        //setInhabilitar (true);
        //setResultado("Gana PC")
    }
    else if ( (jugadaComputadora === "tijera" && jugadaUsuario === "piedra")||
    (jugadaComputadora === "piedra" && jugadaUsuario==="papel")||
    (jugadaComputadora === "papel" && jugadaUsuario === "tijera")){
      console.log ("Gana Jugador");
      setPuntosJugador(puntosJugador+1) ;
      //puntosJugador +=1;
      console.log("Puntos Jugador: "+puntosJugador)
      setResultado ("Gana Jugador")
    }
    else if (jugadaComputadora===jugadaUsuario){
      console.log("Empate")
      setResultado ("Empate");
  }
  setIntentos (intentos+1);
  console.log("intentos"+ intentos)
}
    function enClick(e){
        if (puntosComputadora ===3 || puntosJugador ===3 || intentos ===5){
            setInhabilitar(e)
            // console.log(habilitar)
        }
  }
    
    return(
        <>  
        <button onClick={()=>{determinarGanador(); enClick(true)}} disabled={habilitar}>Jugar</button>
        <p>El resultado es: {resultado}</p>
        <p>puntos Jugador: {puntosJugador}</p>
        <p>puntos Computadora: {puntosComputadora}</p>
        
        </>
    );
}
export default Jugar;