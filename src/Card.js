import React, { useState } from 'react'

const Card = ({name, pokeurl}) => {
    var newurl = String(pokeurl)
    const [pokeorder, pokeorderset] = useState(0)
    fetch(newurl).then(response=>{return response.json()}).then(poki=>{pokeorderset(poki.order)})
    return(
        <div class='bg-silver dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt= 'sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeorder}.png`} width='200' height='200'/>
            <h2>#{pokeorder}</h2>
            <h1>{name}</h1>
        </div>
    )
}

export default Card