// import React, { Fragment } from 'react'; // Antes era necesario importar React y Fragment para usar JSX y Fragment, pero ahora ya no es necesario importar React para usar JSX.

// Variables en JSX
// Se pueden usar variables de cualquier tipo de dato en JSX, pero hay que tener en cuenta que los booleanos no se renderizan en el DOM.
const string = "Esto es una cadena de texto";
const number = 123456;
const array = ["Cadena de texto", "Youtube", 123456, 16.8];
const boolean = true;
const funcion = () => 1+1;
const objeto = { nombre: "Dhaniel", apellido: "Martínez", edad: 40, altura: 1.68, isDeveloper: true };
const fecha = new Date();

// Fragment en JSX sirve para agrupar elementos sin necesidad de crear un nodo extra en el DOM, a diferencia de un div que si crea un nodo extra. Antes se usaba la importacion de React para usar los Fragment, pero ahora ya no es necesario. Se puede usar directamente con las etiquetas <> </>. 

// export const PrimerComponente = () => {
//     return (
//     <Fragment>
//         <h1>Variables en JSX</h1>
//         <h4>Variable tipo string:</h4> <p>{string}</p>
//         <h4>Variable tipo number:</h4> <p>{number}</p>
//         <h4>Variable tipo array:</h4> <p>{array}</p>
//         <h4>Variable tipo boolean:</h4> <p>{boolean}</p>
//         <h4>Variable tipo funcion:</h4> <p>{string}</p>
//         <h4>Variable tipo string:</h4> <p>{funcion()}</p>
//     </Fragment>
//     )
// }

// Usando Fragment con las etiquetas <> </>
export const PrimerComponente = () => {
    return (
    <>
        <h1>Variables en JSX</h1>
        <h4>Variable tipo string:</h4> <p>{string}</p>
        <h4>Variable tipo number:</h4> <p>{number}</p>
        <h4>Variable tipo array:</h4> <p>{array}</p>
        <h4>Variable tipo boolean:</h4> <p>{boolean}</p>
        <h4>Variable tipo funcion:</h4> <p>{string}</p>
        <h4>Variable tipo string:</h4> <p>{funcion()}</p>
    </>
    )
}