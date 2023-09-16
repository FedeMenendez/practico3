import piedra from './piedra.PNG';
import papel from './papel.PNG';
import tijera from './tijera.PNG'
//import { useState } from "react";
import React from 'react';

export default function Seleccion({setJugadaUsuario,habilitarSeleccion}){
    //const [seleccionUsuario, setUserseleccion] = useState ('');
    //const opcion = ["piedra" , "papel" , "tijera"];
    
    function select (option){
        //let jugadaUsuario = option;
        //setUserseleccion (option);
        //console.log (jugadaUsuario);
        //console.log (option);
        setJugadaUsuario (option);
        //let numero = Math.floor(Math.random () * 3)
        // setJugadaComputadora (opcion[numero]);
        // console.log ("jugada pc " + opcion[numero]);
        //option= (seleccionUsuario);
       // document.getElementById("eleccionDelUsuario").innerHTML = "Jugador eligió: " + seleccionUsuario;
    }
    return(
        <>
            <div className='botonesJugador'>
            <button id='btn' onClick={() => select('piedra')} disabled={habilitarSeleccion}><img src={piedra} alt="Piedra"/>Piedra</button>
            <button id='btn' onClick={() => select('papel')} disabled={habilitarSeleccion}><img src= {papel} alt="Papel"></img>Papel</button>
            <button id='btn' onClick={() => select('tijera')}disabled={habilitarSeleccion}><img src= {tijera} alt="Tijera"></img>Tijera</button>
            {/* <p>El jugador eligio: {seleccionUsuario}</p> */}
            </div>
        </>
    )
}
//export default Seleccion;