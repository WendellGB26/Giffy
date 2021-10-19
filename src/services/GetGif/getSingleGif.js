import { useState } from "react";
import {API_KEY,NUM_GIFS} from '../Settings'

const formApiResponseToGifs = apiResponse => {
    const {data} = apiResponse
    const {images, title, id} = data
    const {url} = images.downsized_medium
    return {title, id, url}
}

export default function getSingleGif ({ id }) {
    return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(formApiResponseToGifs)
}