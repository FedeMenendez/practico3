//import Nombre from './Nombre.js';
//import Seleccion from './Seleccion.js';
//import Selecc from './Selecc.js';
import React from 'react';
import { useState } from 'react';
let puntosJugador=0;
let puntosComputadora=0;
let jugadaComputadora='';
let habilitarReset=true;
function Jugar ({jugadaUsuario,habilitarSeleccion,setHabilitacionSeleccion}){
    const [resultado,setResultado]=useState('')
    const [intentos, setIntentos]=useState (1);
    const opcion = ["piedra" , "papel" , "tijera"];
    
    function determinarGanador (){
    if (jugadaUsuario !==''){
        if ( (jugadaComputadora === "piedra" && jugadaUsuario === "tijera")||
            (jugadaComputadora === "papel" && jugadaUsuario==="piedra")||
            (jugadaComputadora === "tijera" && jugadaUsuario === "papel")){
        //console.log("Gana PC");
                puntosComputadora=(puntosComputadora+1);
        //puntosComputadora +=1;
        //console.log("puntos PC: "+ puntosComputadora);
                setResultado ("Gana PC");
        //setResultado("Gana PC")
        }
        else if ( (jugadaComputadora === "tijera" && jugadaUsuario === "piedra")||
        (jugadaComputadora === "piedra" && jugadaUsuario==="papel")||
        (jugadaComputadora === "papel" && jugadaUsuario === "tijera")){
      //console.log ("Gana Jugador");
            puntosJugador=(puntosJugador+1) ;
      //puntosJugador +=1;
      //console.log("Puntos Jugador: "+puntosJugador)
            setResultado ("Gana Jugador")
    }
        else if (jugadaComputadora===jugadaUsuario){
      //console.log("Empate")
            setResultado ("Empate");
        } 
        setIntentos (intentos+1);
    }    
    else {
        alert ("Debe ingresar su jugada")
    }
  
  
  //console.log("intentos"+ intentos)
}
    function enClick(){
        habilitarReset = false;
        if (puntosComputadora ===3 || puntosJugador ===3 || intentos ===5){
            setHabilitacionSeleccion(true)
            if (puntosComputadora>puntosJugador){
                    alert("Gana Computadora");
            }
            else if (puntosJugador>puntosComputadora){
                alert("Has Ganado!!!!")    
            }
            else{
                alert("Empate")
            }
        }
  }
        function selectionpc (){
            let numero = Math.floor(Math.random () * 3)
            //setSeleccionpc (opcion[numero]);
            jugadaComputadora = (opcion[numero]);
            //console.log ("jugada pc " + jugadaComputadora);
        }
        function reset(){
            setHabilitacionSeleccion (false);
            puntosComputadora=0;
            puntosJugador=0;
            setIntentos(1)
            setResultado('');
            jugadaComputadora='';
        }
    return(
        <> <div className='resultados1'>   
        <p>La jugada del usuario es: {jugadaUsuario}</p> 
        <button id='jugar' onClick={()=>{selectionpc();determinarGanador(); enClick()}} disabled={habilitarSeleccion}>Jugar</button>
        <p>La jugada de la computadora es: {jugadaComputadora}</p>
        </div>
        <div className='resultados2'>
        <p>El resultado es: {resultado}</p>    
        <p>Ronda {intentos} de 5</p>
        <p>puntos Jugador: {puntosJugador}</p>
        <p>puntos Computadora: {puntosComputadora}</p>
        <button id='reset' onClick={()=>reset()} disabled={habilitarReset}>Reinicio</button>
        </div>
       </>
    );
}
export default Jugar;