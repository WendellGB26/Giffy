import react,{useEffect,useState} from "react";
import Gif from "../../components/Gif/Gif";
import getGifs from "../../components/GetGif/getGifs"
import "../../App.css"
import ListOfGifs from "../../components/ListOfGif/Index";
import { useGifs } from "../../components/hooks/useGifs";

import { Link, Route } from "wouter";

export default function SearchGif ({params}){
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})

    if (loading) return <i>Loading..</i>

    return<>
        <ListOfGifs gifs={gifs} />
    </>

}