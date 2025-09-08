import { useMemo, useState } from "react";

export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([2,3,4,5,6,7,8,9]);
    const [show, setShow] = useState(true)

    const getCalculo = (listaNumeros) => useMemo(() => {
    console.log('Calculando...')
    return listaNumeros.reduce((a, b) => a * b)
    },[listaNumeros]) //Se usa useMemo para memorizar el resultado del cálculo y solo recalcularlo cuando listaNumeros cambie

    const agregarNumero = () => {
    setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length -1] +1]); //Se agrega un número más a la lista
    console.log(listaNumeros);
    }

    return (
        <>
        <h2>Calculo: </h2>
        <p>{getCalculo(listaNumeros)}</p>

        <button className="btn btn-primary" onClick={()=> setShow(!show)}>{show? 'Show': 'Hide'}</button>
        <button className="btn btn-primary" onClick={()=> agregarNumero()}>Agregar Número</button>
        </>

    )
}
