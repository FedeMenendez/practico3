//import { useState } from "react";
import React from "react";

const opcion = ["piedra" , "papel" , "tijera"];
export default function Selecc({setJugadaComputadora}){
    //const [seleccionpc, setSeleccionpc] = useState ('')
    function seletionpc(){
        let numero = Math.floor(Math.random () * 3)
        //setSeleccionpc (opcion[numero]);
        setJugadaComputadora (opcion[numero]);
        console.log (opcion[numero]);
        //document.getElementById("eleccionDePc").innerHTML = "PC eligió: " + seleccionpc;

    }
   
    return (
        <>
            <button onClick={() => seletionpc()}>Jugar</button>
            {/* <p id="eleccionDePc"> La PC eligio: {seleccionpc} </p> */}
        </>
    )

}
//export default Selecc;