import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null, 
        isLoading: true, 
        errors: null
    })

    const {data, isLoading, errors} = state

    const getFetch = async() => {
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            setState({
                data, 
                isLoading: false, 
                errors: null
            })
        } catch (error) {
            setState({
                data: null, 
                isLoading: false, 
                errors: null
            })
        }
    }

    useEffect(() => {
        if(!url) return
        getFetch()
    }, [url])

    return {
        data, 
        isLoading, 
        errors
    }
}
