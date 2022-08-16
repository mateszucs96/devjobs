import { useEffect, useState } from "react"
import { fetchData } from "../components/fetchData";

export const useGetData = () => {
    const [data, setData] = useState([]);

    const reset = () => {
        setData([])
    }
    useEffect(() => {
        fetchData()
            .then(setData)
    }, [])
    console.log(data)
    return { data, setData, reset };
}