// UseState: El estado en react es un objeto que nos permite almacenar y gestionar datos que pueden cambiar a lo largo del tiempo en un componente.
// Cuando el estado cambia, React vuelve a renderizar el componente para reflejar los cambios en la interfaz de usuario.
// El estado se utiliza para manejar datos dinámicos y responder a las interacciones del usuario.

import { useState } from "react";
export const ContadorApp = ({value}) => {
  const [contador, setContador] = useState(value);
  const handleClick=()=>{ 
    setContador(contador + 1);
  }
  return (
    <>
    <h1>Contador:</h1>
    <p>{contador}</p>
    <button onClick={handleClick}>Iniciar</button>
    </>
  )
}

  //Se hace una constante llamada contador, con el método setContador se puede modificar la variable contador
  //useState es un hook que permite agregar estado a un componente funcional. Se inicializa con el valor pasado como argumento (value en este caso que viene del padre).