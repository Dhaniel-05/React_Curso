//Los componentes en React son funciones que devuelven código JSX
//Los componentes deben empezar siempre con mayúscula
//Los componentes pueden ser exportados para ser usados en otros ficheros

// const Button = () => {
//     return (
//         <button>Soy un botón</button>
//     )
// }

// export const BotonEvent = () => {
//     return (
//         <>
//         <h1>Botón:</h1>
//         <Button></Button>
//         </>
//     )
// } // se puede trabajar importando y exportando componentes

export const BotonEvent = () => {
    function handleClick(event, arg){
        console.log(event, arg)
    }

    return (
        <>
        <h1>Botón:</h1>
        <button onClick={function(){console.log('Botón luego de dar click')}}>Soy un botón</button>
        <button onClick={function(event){console.log(event)}}>Botón de eventos</button>
        <button onClick={(event) => handleClick(event, 'Otro Argumento')}>Botón argumentos</button>
        </>
    )
}
