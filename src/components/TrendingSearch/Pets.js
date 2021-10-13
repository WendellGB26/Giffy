import {Link} from "wouter";

const GifsMascotas = ['Perros','Gatos']

export default function TrendingSearchPets (){
    return <>
        {GifsMascotas.map((GifsMascotas)=>(
            <li className="text-left" key={GifsMascotas}>
                <Link to = {`/gif/${GifsMascotas}`}>{GifsMascotas}</Link>
            </li>
            )
        )}
    </>
}