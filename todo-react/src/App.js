import React, { Component } from 'react';
import { View as TodoApp} from './components/todos';
import { view as Filter} from './components/filter';



class App extends Component {
  render() {
    return (
      <div className="App">
      	<TodoApp />
      	this is app
      </div>
    );
  }
}

export default App;
