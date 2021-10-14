import React,{useContext, useState, useEffect} from "react";
import getGifs from "../../services/GetGif/getGifs";
import GifContext from "../../context/GifContext";

const INITIAL_PAGE = 0

export function useGifs({keyword} = {keyword : null}){
    const {gifs,setGifs} = useContext(GifContext)
    const [loading,setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page,setPage] = useState(INITIAL_PAGE)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'


    useEffect(function(){
        setLoading(true)
        
        
        getGifs({keyword : keywordToUse})
            .then(gifs => setGifs(gifs))
            setLoading(false)
            localStorage.setItem('lastKeyword', keyword)
    },[keyword])

    useEffect(function (){
        if (page == INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({keyword: keywordToUse, page})
            .then(nextGifs =>{
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    },[page])
    return {loading,loadingNextPage, gifs, setPage}
}
