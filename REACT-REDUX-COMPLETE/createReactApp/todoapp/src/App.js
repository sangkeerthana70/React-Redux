import React, {Component} from 'react';
import Todos from './Todos.js';

class App extends Component {
  state = {
    todos: [
    {id: 1, content: 'Buy groceries'},
    {id: 2, content: 'Fill gas in car'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos= {this.state.todos} />
      </div>
    );
  }
}

export default App;
