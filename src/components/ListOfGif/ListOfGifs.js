import react,{useEffect,useState} from "react";
import Gif from "../Gif/Gif";
import getGifs from "../GetGif/getGifs"
import "../../App.css"

export default function ListOfGifs ({gifs}){    
    return <div className="row">
        {
            gifs.map(({id, title, url})=>
            <Gif 
            id={id}
            key={id}
            title={title} 
            url={url}
            />
            ) 
        }
        </div>    
}