function handleClick(event) {
    console.log(event);
} // Evento como argumento

const ButtonEvent = () => {
    return (
        <button onClick={handleClick}>
            Botón con evento
        </button>
    )
} // Botón con evento

export const BotonEventArg = () => {
    return (
        <>
        <h1>Botón con Eventos:</h1>
        <ButtonEvent></ButtonEvent>
        </>
    )
} // Exportación del componente
