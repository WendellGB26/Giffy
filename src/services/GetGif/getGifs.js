import {API_KEY,NUM_GIFS} from '../Settings'

export default function getGifs ({keyword = 'Rick'} = {}) {
   const apiUrl =  `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${NUM_GIFS}&offset=0&rating=g&lang=en`
   return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const {data} = response
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const {images, title, id} = image
                    const {url} = images.downsized_medium
                    return {title, id, url}
                })
                return gifs
            }
        })
}