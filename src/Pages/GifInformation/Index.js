import React from "react";
import Gif from '../../components/Gif/Gif'
import './GifInformation.css'
import useGlobalGif from "../../components/hooks/useGlobalGif";
import '../../Layouts/Gif.css'
import useSingleGif from "../../components/hooks/useSingleGif";
import useTitle from "../../components/hooks/useTitle";

export default function GifInformation ({params}){
    const { gif } = useSingleGif({id: params.id})

    useTitle({title: `Giffy | ${params.id}`})

    if (!gif) return null

    return <div className = "Gif-Info">
        <Gif {...gif} />
    </div>
}