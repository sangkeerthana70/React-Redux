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
    //console.log(id);

    //filter() is a non-destructive method that does not alter the array in the state directly 
    //but just returns a new array and stores in the variable below
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
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
