import React, {useContext} from "react";
import GifContextProvider from "../../context/GifContext";

export default function GifInformation ({params}){
    const {gifs} = useContext(GifContextProvider)
    console.log({gifs})
    // console.log(params.id)
    return <h1>GIF con id {params.id}</h1>
}