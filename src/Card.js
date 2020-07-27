import React from 'react'

const Card = ({name, pokeurl}) => {
    var newurl = String(pokeurl)
    var pokeorder
    fetch(newurl).then(response=>{return response.json()}).then(poki=>{pokeorder=poki.order;return pokeorder})
    return(
        <div>
            <img alt= 'sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeorder}.png`}/>
            <h1>{name}</h1>
            <h2>{pokeorder}</h2>
        </div>
    )
}

export default Card