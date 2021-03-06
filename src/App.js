import React, { Component } from 'react';
import './App.css';

import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {description: 'walk pets', isCompleted: true},
        {description: 'wash dishes', isCompleted: false},
        {description: 'eat off dishes', isCompleted: false},
      ],
      newToDoDescription: ''
    };
  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos: todos});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.newToDoDescription){return}
    const newTodo = {description: this.state.newToDoDescription, isCompleted: false};
    this.setState({ todos: [...this.state.todos, newTodo], newToDoDescription: '' });
  }  

  handleChange(e){
    this.setState({newToDoDescription: e.target.value})
  }
  

deleteToDo(index){
  console.log("check 1");
  const todos = this.state.todos.slice();
  this.setState({todos: todos.filter((item, ind) => {return (ind !== index)})});
}

  render() {
    return (
      <div className="App">
      <ul>
        {this.state.todos.map((todo, index) =>
        <ToDo key = {index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={() => this.toggleComplete(index)} deleteToDo={() => this.deleteToDo(index)}/>
        )}
      </ul>
      <form onSubmit={(e) => this.handleSubmit(e)}>
<input type="text" value={this.state.newToDoDescription} onChange={(e) => this.handleChange(e)}/>
<input type="submit"/>
      </form>
      </div>
    );
  }
}

export default App;
