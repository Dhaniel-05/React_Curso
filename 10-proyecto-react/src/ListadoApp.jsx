import { useState } from "react";

const Items =({nombre, visto}) => {
  return (
    <li className="blanco">{nombre} {visto ? '✅':'❌'}</li>
  )
}

export const ListadoApp = () => {
  const addTask = () => {
    setArreglo( [...arreglo, {nombre: 'Tarea nueva', visto: false}] )
  }
    let listadoSecciones =[
      {nombre: 'Instalaciones necesarias', visto: true},
      {nombre: 'Uso de Vite', visto: true},
      {nombre: 'Componentes', visto: true},
      {nombre: 'Variables en JSX', visto: true},
      {nombre: 'Props', visto: true},
      {nombre: 'Eventos', visto: true},
      {nombre: 'useState', visto: true},
      {nombre: 'Redux', visto: false},
      {nombre: 'customHooks', visto: false},
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

  return (
    <>
    <h1>Listado de temas del curso</h1>
    <ol>
      {arreglo.map( (item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>))}
      {/* En el mapeo se utiliza key solo si el nombre es único */}
    </ol>

    <button onClick={()=> addTask()}>Agregar Tarea</button>
    {/* En este caso de acuerdo al mapeo y al añadir Tarea nueva si se clickea una sola vez no habrá error pero en el segundo click en el botón al crear el elemento en consola saltará el error debido a que el elemento Tarea nueva se repite y el key del nombre debe ser único. */}
    </>
  )
}
