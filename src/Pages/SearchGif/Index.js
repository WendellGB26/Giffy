import react,{useEffect,useState} from "react";
import Gif from "../../components/Gif/Gif";
import getGifs from "../../services/GetGif/getGifs"
import "../../App.css"
import ListOfGifs from "../../components/ListOfGif/Index";
import { useGifs } from "../../components/hooks/useGifs";

import { Link, Route } from "wouter";

export default function SearchGif ({params}){
    const {keyword} = params
    const {loading, gifs,setPage} = useGifs({keyword})

    if (loading) return <i>Loading..</i>

    const handleNextPage = () => setPage(prevPage => prevPage+1)
    return<>
        <ListOfGifs gifs={gifs} />
        <br />
        <button onClick={handleNextPage}>Get next page</button>
    </>

}