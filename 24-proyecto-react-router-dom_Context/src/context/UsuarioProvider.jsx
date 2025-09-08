import { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

    // const usuario = {
    //     nombre: 'Dhaniel',
    //     tecnologia: 'React',
    //     email: 'ramcrack@gmail.com',
    //     redes: 'dhanymarth',
    // }

export const UsuarioProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}
