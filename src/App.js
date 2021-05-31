
import React, {Component} from 'react';

import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import { cities } from './cities';


class App extends Component{
  constructor(){
    super(); //calls the constructor method on the component and gives us access to this.state. The state now only exists on the component class
    
    this.state = {
      cities,
      searchField:''
    };
    
  }

  /* componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users')
    .then(response => response.json())
    .then(users => this.setState({cities : users})); //
  }
 */

  render(){
    const {cities, searchField} = this.state;
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return(      
      <div className="App">
        <h1>Beautiful cities</h1>
        <SearchBox
          placeholder = {'Search cities' }
          handleChange = {e => this.setState({searchField : e.target.value})}
        />
        <CardList cities={filteredCities} />
    </div>
    );
  }
}

export default App;
