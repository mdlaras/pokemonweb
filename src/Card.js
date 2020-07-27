import React, { Component } from 'react'

const Card = ({name, number}) => {
    return(
        <div>
            <img alt= 'sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}/>
            <h1>{name}</h1>
            <h2>#{number}</h2>
        </div>
    )
}

export default Card