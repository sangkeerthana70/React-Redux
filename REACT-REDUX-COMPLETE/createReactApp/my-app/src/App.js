import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React app</h1>
        <p>Welcome :)</p>
        <Ninjas name = "Kate" age = "30" belt = "black"/> 
      </div>
    );
  }
}

export default App;
