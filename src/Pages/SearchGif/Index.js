import react,{useEffect,useState} from "react";
import Gif from "../../components/Gif/Gif";
import getGifs from "../../components/GetGif/getGifs"
import "../../App.css"
import ListOfGifs from "../../components/ListOfGif/Index";

import { Link, Route } from "wouter";

export default function SearchGif ({params}){
    const {keyword} = params
    const [gifs,setgifs] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(function(){
        setLoading(true)
        getGifs({keyword})
            .then(gifs => setgifs(gifs))
            setLoading(false)
    },[keyword])

    if (loading) return <i>Loading..</i>

    return<>
        <ListOfGifs gifs={gifs} />
    </>

}