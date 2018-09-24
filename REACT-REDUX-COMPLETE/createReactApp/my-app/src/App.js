import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Joshi', age: 35, belt: 'green', id: 2 },
      { name: 'Ryan', age: 20, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (newNinja) => {
      //console.log(newNinja);
      newNinja.id = Math.random();
      //spread operator to create a copy of the state of ninjas above to alter it below to push a new Ninja
      //this is done to avoid altering the state directly out of the setState
      let ninjas = [...this.state.ninjas, newNinja];
      this.setState({
        ninjas: ninjas
      })
  }

  deleteNinja = (id) => {
    console.log(id);
  }
  render() {
    return (
      <div className="App">
        <h1>My First React app</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja = {this.deleteNinja} ninjas = { this.state.ninjas }/> 
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    );
  }
}

export default App;
