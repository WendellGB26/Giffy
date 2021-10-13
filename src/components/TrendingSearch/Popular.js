import React from "react";
import {Link} from "wouter";

const GifsPopulares = ['Naruto','Suits','Scary','Memes']
const GifsMascotas = ['Perros','Gatos']

export default function TrendingSearchPopular (){
    return<>
        {GifsPopulares.map((GifsPopulares)=>(
            <li className="text-left" key={GifsPopulares}>
                <Link to = {`/gif/${GifsPopulares}`}>{GifsPopulares}</Link>
            </li>
            )
        )}
    </>
}