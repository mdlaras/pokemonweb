import React, { Component } from 'react'

const Searchbar = ({searchChange}) => {
        return(
            <div>
                <input type='search' placeholder="Enter Pokemon Name" onChange={searchChange}/>
            </div>
            
        )
    };

export default Searchbar