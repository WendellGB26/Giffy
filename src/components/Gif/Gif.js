import React,{useEffect,useState} from 'react';
import '../../Layouts/Gif.css';
import '../../App.css'
import { Link, Route } from "wouter";
import SearchGif from '../../Pages/SearchGif/Index';

export default function Gif ({title, url, id}){
    return<>
        <section className="col-6">
            <a href= {`/${title}${id}`} className="Gif-link Gif">
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url} />
            </a>
        </section>
    </>
}