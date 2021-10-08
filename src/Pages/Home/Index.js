import React,{useState} from 'react';
import '../../App.css';
import ListOfGifs from '../../components/ListOfGif/ListOfGifs';
import './Home.css'
import { Link, Route,useLocation } from "wouter";

const PopularGif = ["Naruto","The 100", "The Walking Dead"]

export default function Home (){
    const [keyword,setKeyword] = useState ('')
    const [path,pushLocation] = useLocation()
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