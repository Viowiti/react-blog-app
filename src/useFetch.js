//creating a custom hook for fetching data

import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(
            () => {
                fetch(url)
                .then(resp => {
                    if (!resp.ok){
                        throw Error("Unable to fetch resource");
                    }
                    return resp.json()})
                .then(data => {
                
                setData(data)
                setIsPending(false)
                setError(null);
            })
                .catch((err) => {
                    setError(err.message);
                    setIsPending(false);
                })
            
            },1000);
        
    }, [url])

    return {data, isPending, error};
}

export default useFetch;