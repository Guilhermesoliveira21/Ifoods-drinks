import axios from "axios";
import { useEffect, useState } from "react"

export const useFetch = (uri) => {

    const [data, setData] = useState([]);
    const [loading, setLoandig] = useState(true);
    const [erro, setErro] = useState(null);

    async function fetchData() {
        setLoandig(true);
        try {
            
            const { data } = await axios.get(uri);
            
            setData(data);
            setLoandig(false);
        } catch (error) {
            setErro(error)
        }

    }

    useEffect(() => {
        fetchData();
    }, [uri])


    return {data, erro, loading};
}