import React,{useEffect, useState} from 'react';
import '../../App.css';
import ListOfGifs from '../../components/ListOfGif/Index';
import './Home.css'
import getGifs from '../../components/GetGif/getGifs'
import { Link, Route,useLocation } from "wouter";
import { useGifs } from '../../components/hooks/useGifs';

export default function Home (){
    const [keyword,setKeyword] = useState ('')
    const [path,pushLocation] = useLocation()
    const {loading,gifs} = useGifs([])
    
    const handleSubmit = evt =>{
        evt.preventDefault()
        pushLocation(`/gif/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search the gif...' onChange={handleChange} type='text' value={keyword}></input>
                <button onClick={handleChange} value={keyword}>Search</button>
            </form>
            <h3 className='App-title'>Ultima Busqueda</h3>
            <div className = "Last-Search">
                <ListOfGifs gifs={gifs} />
            </div>
        </>
    ) 
}