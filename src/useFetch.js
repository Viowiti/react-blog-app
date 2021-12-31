//creating a custom hook for fetching data

import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(
            () => {
                fetch(url, { signal : abortCont.signal})
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
                    if (err.name === 'AbortError'){
                        console.log('Fetch Aborted')
                    }else{
                        setError(err.message);
                    setIsPending(false);
                    }
                    
                })
            
            },1000);
        
            return () => abortCont.abort();
    }, [url])

    return {data, isPending, error};
}

export default useFetch;