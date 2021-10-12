import React,{useContext} from "react";
import GifContext from "../../context/GifContext";

export default function useGlobalGif () {
    const {gifs} = useContext(GifContext)
    return gifs
}
