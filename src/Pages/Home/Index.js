import React,{useEffect, useState} from 'react';
import '../../App.css';
import ListOfGifs from '../../components/ListOfGif/Index';
import './Home.css'
import getGifs from '../../components/GetGif/getGifs'
import { Link, Route,useLocation } from "wouter";
import { useGifs } from '../../components/hooks/useGifs';

const PopularGif = ["Naruto","The 100", "The Walking Dead"]

export default function Home (){
    const [keyword,setKeyword] = useState ('')
    const [path,pushLocation] = useLocation()
    const {loading,gifs} = useGifs('Rick')
    // //::::::::::::::::::::::::::::::::::::::::::::::::
    // const [gifs,setGifs] = useState ([])

    // useEffect(function(){
    //     getGifs({keyword: 'Rick'})
    //         .then(gifs => setGifs(gifs))
    // },[keyword])
    // //::::::::::::::::::::::::::::::::::::::::::::::::

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
            <ListOfGifs gifs={gifs} />
            <section className="App-link row text-center">
                <p>Los Gif más populares</p>
                {PopularGif.map((PopularGif)=>(
                    <li key={PopularGif}>
                        <Link to={`/gif/${PopularGif}`}>Gifs de {PopularGif}</Link>  
                    </li>
                ))}
            </section>
        </>
    ) 
}