import React from "react";
import Gif from '../../components/Gif/Gif'
import './GifInformation.css'
import useGlobalGif from "../../components/hooks/useGlobalGif";

export default function GifInformation ({params}){
    const gifs = useGlobalGif()
    const gif = gifs.find(singleGif => 
        singleGif.id == params.id
    )

    return <div className = "Gif-Info">
        <Gif {...gif} />
    </div>
}