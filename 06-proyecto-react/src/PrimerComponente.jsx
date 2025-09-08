// PROPS: propiedades se utilizan para pasar datos entre componentes de React. Son propiedades que se pasan de padre a hijo y son inmutables, lo que significa que no pueden ser modificadas por el componente que las recibe.
// Se pueden pasar diferentes tipos de datos como props, incluyendo cadenas de texto, números, booleanos, arreglos, objetos y funciones.

// export const PrimerComponente = (props) => {
//     console.log(props);
//     return (
//     <>
//         <h1>Props:</h1>
//     </>
//     )
// } 
// Las props se reciben como un objeto en el componente hijo, y se pueden acceder a ellas utilizando la sintaxis de punto (props.nombreDeLaPropiedad).

// Lo que se hace es desestructurar las props para acceder directamente a las propiedades individuales en lugar de tener que acceder a ellas a través del objeto props.
export const PrimerComponente = ({titulo, subtitulo, numero}) => {
    return (
    <>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <h3>{numero + 1}</h3>
    </>
    )
}