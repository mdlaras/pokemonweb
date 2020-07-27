import React from 'react'
import Card from './Card'

const CardList = ({pokemon}) => {
    const CardComponent = pokemon.map((i) => {
        return <Card name = {i.name} pokeurl = {i.url}/>
    })
    return (
        <div>
            {CardComponent}
        </div>
    )
}

export default CardList