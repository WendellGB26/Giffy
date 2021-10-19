import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import getSingleGif from "../../services/GetGif/getSingleGif";
import { useGifs } from "./useGifs";

export default function useSingleGif ({ id }) {
    const{ gifs }= useGifs()
    const gifFromCache = gifs.find(singleGif => 
        singleGif.id == id
    )

    const [gif, setGif] = useState(gifFromCache)

    useEffect(function() {
        if(!gif){
            //Llamar al servicio si no tenemos gif
            getSingleGif({ id })
                .then(gif => {
                    setGif(gif)
                })
        }
    }, [gif, id])

    return { gif }
}