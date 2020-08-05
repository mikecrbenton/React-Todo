import React from 'react';
import ReactDOM from "react-dom";
import './components/Todo.css'
import list from './components/data'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import styled from 'styled-components';

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
      <MainContainer>

         <div className="header">
           <h1>To Do List</h1>
           <TodoForm addTask={this.addTask} />
         </div>

         <TodoList
           list={this.state.list}
           toggleTask={this.toggleTask}
           clearCompleted={this.clearCompleted}
         />
      </MainContainer>
    );
  }
}

export default App;

const MainContainer = styled.div`
   border: 3px solid #009B77;
   width: 50%;
   padding: .5em;
   box-shadow: 0px 0px 20px #060606;

   h1{
      text-align: center;
      color: #009B77;
      font-weight: 900;
      font-size: 2.5rem;
   }
`;
