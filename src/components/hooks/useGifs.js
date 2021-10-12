import React,{useContext, useState, useEffect} from "react";
import getGifs from "../GetGif/getGifs";
import GifContext from "../../context/GifContext";

export function useGifs({keyword} = {keyword : null}){
    const {gifs,setGifs} = useContext(GifContext)
    const [loading,setLoading] = useState(false)

    useEffect(function(){
        setLoading(true)
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        
        getGifs({keyword : keywordToUse})
            .then(gifs => setGifs(gifs))
            setLoading(false)
            localStorage.setItem('lastKeyword', keyword)
    },[keyword])

    return {loading, gifs}
}
