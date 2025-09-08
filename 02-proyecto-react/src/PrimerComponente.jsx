// Esta estructura se utilizaba antes de React 16.8

// function PrimerComponente() {
//     return ( <h1>Hola Mundo</h1> );
// }

// export default PrimerComponente;

// Esta estructura se utilizaba antes de React 16.8
// class PrimerComponente extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <h1>Hola Mundo</h1>
//         );
//     }
// }
// export default PrimerComponente;

// Ahora se recomienda esta estructura con funciones flecha y exportación nombrada
import React from 'react'

export const PrimerComponente = () => {
    return (
    <h1>Hola Mundo</h1>
    )
}
