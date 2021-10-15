import React, {useEffect,useState, useRef, useCallback} from "react";
import Gif from "../../components/Gif/Gif";
import getGifs from "../../services/GetGif/getGifs"
import "../../App.css"
import ListOfGifs from "../../components/ListOfGif/Index";
import { useGifs } from "../../components/hooks/useGifs";
import debounce from "just-debounce-it";
import { Link, Route } from "wouter";
import useNearScreen from "../../components/hooks/useNearScreen";

export default function SearchGif ({params}){
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
      externalRef: loading ? null : externalRef,
      once: false
    })
  
    //const handleNextPage = () => setPage(prevPage => prevPage+1)
    //const handleNextPage = ()=>console.log('next page')

    const debounceHandleNextPage= useCallback(debounce(
        ()=>setPage(prevPage => prevPage+1),500
    ),[])

    useEffect(function(){
        console.log(isNearScreen)
        if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage,isNearScreen])

    return<>
        {/* <button onClick={handleNextPage}>Get next page</button> */}
        <br />
        <ListOfGifs gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
    </>

}