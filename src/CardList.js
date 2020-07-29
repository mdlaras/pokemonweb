import React from 'react'
import Card from './Card'

const pokelink = 'https://pokeapi.co/api/v2/pokemon/'
const CardList = ({pokemon}) => {
    const CardComponent = pokemon.map((i) => {
        return <Card name = {i.name} pokeurl = {pokelink + i.name }/>
    })
    return (
        <div>
            {CardComponent}
        </div>
    )
}

export default CardList