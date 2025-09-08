// PROPS: propiedades se utilizan para pasar datos entre componentes de React. Son propiedades que se pasan de padre a hijo y son inmutables, lo que significa que no pueden ser modificadas por el componente que las recibe.
// Se pueden pasar diferentes tipos de datos como props, incluyendo cadenas de texto, números, booleanos, arreglos, objetos y funciones.

import PropTypes from 'prop-types' // Importamos la librería prop-types para validar las props

// Definimos las propTypes para validar las props que recibe el componente
export const ComponenteProps = ({tituloProps, subtituloProps, numeroProps}) => {
    return (
    <>
        <h1>{tituloProps}</h1>
        <h2>{subtituloProps}</h2>
        <h3>{numeroProps + 1}</h3>
    </>
    )
}

ComponenteProps.propTypes = {
    tituloProps: PropTypes.string.isRequired, // La prop 'titulo' es de tipo string y es obligatoria
    subtituloProps: PropTypes.string, // La prop 'subtitulo' es de tipo string y no es obligatoria
    numeroProps: PropTypes.number // La prop 'numero' es de tipo number y no es obligatoria
}

ComponenteProps.defaultProps = {
    tituloProps: 'Título por defecto', // Valor por defecto para la prop 'titulo'
    subtituloProps: 'Subtítulo por defecto', // Valor por defecto para la prop 'subtitulo'
    numeroProps: 0 // Valor por defecto para la prop 'numero'
} // Si no se le pasa ningún valor a las props, se utilizarán los valores por defecto definidos aquí.

// Nota: Si se le pasa un valor a una prop, este valor sobrescribirá el valor por defecto definido en defaultProps.