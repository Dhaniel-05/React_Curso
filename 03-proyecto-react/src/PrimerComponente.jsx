const string = "Esto es una cadena de texto";
const number = 123456;
const array = ["Cadena de texto", "Youtube", 123456, 16.8];
const boolean = true;
const funcion = () => 1+1;
const objeto = { nombre: "Dhaniel", apellido: "Martínez", edad: 40, altura: 1.68, isDeveloper: true };
const fecha = new Date();

//rafc Sirve para crear un componente funcional de React
export const PrimerComponente = () => {
    return (
    <p>{array}</p>
    )
}

// export const PrimerComponente = () => {
//     return (
//     <p>{funcion()}</p>
//     )
// } // De esta manera se puede renderizar cualquier tipo de dato en JSX, en este caso se ejecuta la función y se renderiza el resultado.

// export const PrimerComponente = () => {
//     return (
//     <p>{JSON.stringify(fecha)}</p>
//     )
// } // De esta manera se puede renderizar cualquier tipo de dato en JSX, pero los objetos no se pueden renderizar directamente, por eso se usa JSON.stringify() para convertir el objeto en una cadena de texto.
