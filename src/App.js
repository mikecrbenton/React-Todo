import React from 'react';
import ReactDOM from "react-dom";

import list from './components/data'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
     super();
     this.state = {
      list: list
     };
  }

  toggleTask = (todoId) => {
     console.log("LIST ID: ",todoId);
   this.setState({
     list: this.state.list.map( (task) => {
        console.log("TASK ID: ", task)
       if (todoId === task.id) {
         return {
           ...task,
           completed: !task.completed
         };
       }
       return task;
     })
   });
 };

 addTask = (e, todoText) => {

   const newTask = {
      task: todoText,
      id: Date.now(),
      completed: false
   };

   this.setState({
     list: [...this.state.list, newTask]
   });
 };

 clearCompleted = e => {
   e.preventDefault();
   // if item is purchased (item.purchased is true) then filter out
   this.setState({
     list: this.state.list.filter(item => !item.completed)
   });
 };

 
  render() {
    return (
      <div className="main-container">

         <div className="header">
           <h1>To Do List</h1>
           <TodoForm addTask={this.addTask} />
         </div>

         <TodoList
           list={this.state.list}
           toggleTask={this.toggleTask}
           clearCompleted={this.clearCompleted}
         />
      </div>
    );
  }
}

export default App;
