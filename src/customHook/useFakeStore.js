import { useState,useEffect } from "react";

const useFakeStore = () => {
    const[storeData,SetStoreData] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);


    useEffect(() =>{
        const baseUrl = "https://fakestoreapi.com/products/category/electronics"
        fetch(baseUrl,{mode:"cors"})
            .then((response) => {
                if(!response.ok){
                    throw new Error("failed to fetch data")
                    
                }
                return response.json();
            })
            .then((response) => SetStoreData(response))
            .catch((error) => setError(error))
            .finally(()=> setLoading(false));
    },[])
    return {storeData,error,loading}

}

export default useFakeStore;