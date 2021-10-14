import React,{useEffect, useState} from 'react';
import '../../App.css';
import ListOfGifs from '../../components/ListOfGif/Index';
import './Home.css'
import getGifs from '../../services/GetGif/getGifs'
import { Link, Route,useLocation } from "wouter";
import { useGifs } from '../../components/hooks/useGifs';
import TrendingSearchPopular from '../../components/TrendingSearch/Popular';
import TrendingSearchPets from '../../components/TrendingSearch/Pets';

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
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-md-8">
                        <div className = "Last-Search">
                            <h3 className='App-title'>Ultima Busqueda</h3>
                            <ListOfGifs gifs={gifs} />
                        </div>
                    </div>
                    <div className = "col-md-4">
                        <div className="Popular-Links">
                            <h3 className='App-title'>Los GIFS mas populares</h3>
                            <TrendingSearchPopular/>

                            <h3 className='App-title'>GIFS de mascotas</h3>
                            <TrendingSearchPets/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}