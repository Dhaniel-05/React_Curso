import './PrimerComponente.css'; // Importando hoja de estilos CSS

// Estilos en REACT
// 1. Inline
// 2. En un objeto
// 3. Librerías externas (Styled Components, Tailwind, Bootstrap, etc)
// 4. CSS tradicional (ficheros .css)

const string = "Esto es una cadena de texto";
const number = 123456;
const array = ["Cadena de texto", "Youtube", 123456, 16.8];
const boolean = true;
const funcion = () => 1+1;
const objeto = { nombre: "Dhaniel", apellido: "Martínez", edad: 40, altura: 1.68, isDeveloper: true };
const fecha = new Date();

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
