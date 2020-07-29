import React from 'react';
import './App.css';
import Searchbar from './Searchbar'
import CardList from './CardList'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      pokemon: [],
      searchfield : ''
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=493&offset=0').then(response=>{return response.json()}).then(pokis=>this.setState({ pokemon:pokis.results }))
  }
  
  onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value})
  }

  render(){
    const {pokemon, searchfield} = this.state
    const filteredpoke = pokemon.filter(pokey => {return pokey.name.includes(searchfield.toLowerCase())})
    return (
      <div className='tc'>
        <h1 class='bg-gold pa3'>The Pokedex</h1>
        <Searchbar searchChange = {this.onSearchChange}/>
        <div class='pa3'>
          <CardList pokemon = {filteredpoke}/>
        </div>
        
      </div>
    );
  }
}

export default App;
