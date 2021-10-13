import React,{useEffect,useState} from 'react';
import '../../Layouts/Gif.css';
import '../../App.css'
import { Link, Route } from "wouter";
import SearchGif from '../../Pages/SearchGif/Index';

export default function Gif ({title, url, id}){
    return<>
        <section className="col-4">
            <Link href= {`gif/${id}`} className="Gif-link Gif Gif-Container">
                <img loading='lazy' alt={title} src={url} />
                <h4>{title}</h4>
            </Link>
        </section>
    </>
}