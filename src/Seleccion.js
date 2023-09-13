import piedra from './piedra.PNG';
import papel from './papel.PNG';
import tijera from './tijera.PNG'
//import { useState } from "react";
import React from 'react';

export default function Seleccion({setJugadaUsuario}){
    //const [seleccionUsuario, setUserseleccion] = useState ('');
    function select (option){
        //let jugadaUsuario = option;
        //setUserseleccion (option);
        //console.log (jugadaUsuario);
        console.log (option);
        setJugadaUsuario (option);
        //option= (seleccionUsuario);
       // document.getElementById("eleccionDelUsuario").innerHTML = "Jugador eligió: " + seleccionUsuario;
    }
    return(
        <>
            {/* <button onClick={(e) => setUserseleccion(e.target.value)} ><img src={piedra} alt="Piedra" />Piedra</button> */}
            <button onClick={() => select('piedra')} ><img src={piedra} alt="Piedra" />Piedra</button>
            <button onClick={() => select('papel')}><img src= {papel} alt="Papel"></img>Papel</button>
            <button onClick={() => select('tijera')}><img src= {tijera} alt="Tijera"></img>Tijera</button>
            {/* <p>El jugador eligio: {seleccionUsuario}</p> */}
        </>
    )
}
//export default Seleccion;