import { useState } from "react";

export default function Nombre ({setHabilitacionSeleccion}){
    const [username, setusername] = useState ('');
    const [deshabilitar, setDeshabilitar]=useState ('');
    
    function handleClick (e){
        //let nombreJugador = document.getElementById ("nombre").value;
        //document.getElementById("mensaje").innerHTML = "Hola " + username + " elige!!! ";
        setusername(e.target.value);
        //console.log (username)
        
      };
    function enClick () {
        if(username!==""){
            setDeshabilitar (true);
            setHabilitacionSeleccion(false);
        }
        else{
            alert ("Por favor ingrese su nombre");
        }
    
    }
    return(
        <> 
            <h1>Bienvenido a piedra, papel, tijera</h1>
            <div className="presentacion">  
            <h2>Ingrese su nombre: </h2>
            <input type='text' id="nombre" placeholder='Nombre Jugador' value={username} onChange={handleClick} disabled= {deshabilitar}></input>
            <button id="ingresoNombre" onClick={enClick} disabled= {deshabilitar}>Ingreso Nombre</button>
            <h3 id="mensaje">Hola! {username} elige:</h3>
        </div></>
    )
}
//export default function Nombre (setHabilitacionSeleccion) ; 
