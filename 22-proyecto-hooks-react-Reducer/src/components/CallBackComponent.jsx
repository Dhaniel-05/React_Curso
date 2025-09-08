import { useCallback, useState } from "react"
import {Incrementar} from "./Incrementar"

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        setCounter(contador => contador + val)
    },[]) //Con useCallback, la funcion se memoriza y no se vuelve a crear en cada renderizado en este caso se está memorizando la función incrementarPadre, que depende de un array vacío, lo que significa que no tiene dependencias y solo se creará una vez cuando el componente se monte por primera vez.

    return (
        <>
        <h1>Contador: {counter}</h1>
        <Incrementar incrementar={incrementarPadre}></Incrementar>
        </>
    )
}
