import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container.jsx';

export class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <TodoListContainer />
    );
  }
}

export default App;
