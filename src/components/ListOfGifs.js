import { useState, useEffect } from 'react'
import Gif from "./Gif"
import getGifs from '../services/getGifs'

export default function ListOfGifs ({ keyword }){
    const [gifs, setGifs] = useState([])
  
    useEffect(function () {
      getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, []) //eslint-disable-line

    return gifs.map(({id, url, title}) => 
        <Gif 
            key={id}
            title={title} 
            url={url} 
            id={id}
        />
    )
}