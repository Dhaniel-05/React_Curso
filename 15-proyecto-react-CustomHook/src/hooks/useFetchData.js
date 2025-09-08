import { useEffect, useState } from "react";
import { fetchdata } from "../helpers/fetchData";

export const useFetchData = (endPoint) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     fetchdata(endPoint)
    //     .then(res => {
    //         setData(res.data)
    //         setIsLoading(res.isLoading)
    //     })
    const getData = async() => {
        const {data, isLoading} = await fetchdata(endPoint);
        setData(data);
        setIsLoading(isLoading)
    }
    useEffect(() => {
        getData();
    }, [endPoint]);
    
    return {
        data,
        isLoading
    }
}
