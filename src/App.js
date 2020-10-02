import React, {Component} from 'react';

import {CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/serach-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };

  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };
  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then(users => this.setState({monsters:users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMOnsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
          <h1>Cats </h1>
          <SearchBox 
            placeholder='search monsters'
            onSearchChange={this.onSearchChange} 
          />
        <CardList monsters={filteredMOnsters} />
      </div>
    );
  }
}

export default App;
