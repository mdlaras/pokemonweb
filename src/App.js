import React from 'react';
import './App.css';
import Searchbar from './Searchbar'
import Card from './Card'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      pokemon = [],
      searchfield = ''
    }
  }

  render(){
    return (
      <div>
        <h1>The Pokedex</h1>
        <Searchbar />
        <Card />
      </div>
    );
  }
}

export default App;
