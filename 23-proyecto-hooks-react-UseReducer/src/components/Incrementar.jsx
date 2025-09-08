import React from "react"

export const Incrementar = React.memo(({ incrementar }) => {
    console.log("Me volvi a generar :(")
    return (
        <button className="btn btn-primary" onClick={()=>incrementar(10)}>+1</button>
        )
    }
) // Con React.memo, el componente Incrementar solo se volverá a renderizar si sus props cambian, en este caso, si la función incrementar cambia. Dado que estamos usando useCallback para memorizar la función incrementarPadre en el componente padre, el componente Incrementar no se volverá a renderizar innecesariamente cuando el componente padre se vuelva a renderizar.
// Nota: Se agregó un parámetro a la función incrementar para demostrar que se puede pasar un valor desde el componente hijo al padre.
// Nota: Se agregó una función flecha en el onClick para evitar que la función incrementar se ejecute inmediatamente al renderizar el componente.
