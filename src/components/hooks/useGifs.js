import React,{useState, useEffect} from "react";
import getGifs from "../GetGif/getGifs";

export function useGifs({keyword}){
    const [gifs,setgifs] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(function(){
        setLoading(true)
        getGifs({keyword})
            .then(gifs => setgifs(gifs))
            setLoading(false)
    },[keyword])

    return {loading, gifs}
}
