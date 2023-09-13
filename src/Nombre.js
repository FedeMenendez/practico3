import { useState } from "react";

const Nombre =()=>{
    const [username, setusername] = useState ('');
    const [deshabilitar, setDeshabilitar]=useState ('');
    const handleClick = e => {
        //let nombreJugador = document.getElementById ("nombre").value;
        //document.getElementById("mensaje").innerHTML = "Hola " + username + " elige!!! ";
        setusername(e.target.value);
        console.log (username)
      };
    const enClick = e=> {
        setDeshabilitar (true);
    }
    return(
        <>
            <h1>Bienvenido a piedra, papel, tijera</h1>
            <label>Ingrese su nombre: </label>
            <input type='text' id="nombre" placeholder='Nombre Jugador' value={username} onChange={handleClick} disabled= {deshabilitar}></input>
            <button onClick={enClick} disabled= {deshabilitar}>Ingreso Nombre</button>
            <p id="mensaje">Hola! {username} elige:</p>
        </>
    )
}
export default Nombre; 
