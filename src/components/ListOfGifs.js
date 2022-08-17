import { useState, useEffect } from 'react'
import Gif from "./Gif"
import getGifs from '../services/getGifs'

export default function ListOfGifs ({ params }){
    const [gifs, setGifs] = useState({loadingg: false, results: []})
    const { keyword } = params;

    useEffect(function () {
        setGifs(
            actualGifs => ({loading: true, results: actualGifs.results})
        )
        
        getGifs({ keyword })
            .then(gifs => {
            setGifs({loading: false, results: gifs})
        })
    }, [keyword])

    if(gifs.loading){
        return <div>
            <i>Cargando</i>
        </div>
    }

    return <div>
        {
            gifs.results.map(({id, url, title}) => 
            <Gif 
                key={id}
                title={title} 
                url={url} 
                id={id}
            />
         )
        }
    </div>
}