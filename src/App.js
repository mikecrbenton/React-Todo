import React from 'react';
import ReactDOM from "react-dom";
import './components/Todo.css'
import list from './components/data'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import styled from 'styled-components';

/* functional -> 'props' class -> 'this.props' */

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
     super();
     //APPLICATION LEVEL STATE
     this.state = {
      list: list //list imported from data.js
     };
  }

  toggleTask = ( todoId ) => {
   //why map?  to loop through and find
   //correct id, then return new state
   //with toggled boolean

   //setState - React needs the creation
   //on a new object, not just manipulation
   //of data **Build a new state object each time**
   this.setState({
     list: this.state.list.map( (task) => {
       if (todoId === task.id) {
         return {
           ...task, // sends the attributes of the object
           completed: !task.completed // overrides the equivilant field in that object
         };
       }
       return task;
     })
   });

 };

 addTask = (todoText) => {
   // create a new object
   const newTask = {
      task: todoText,
      id: Date.now(),
      completed: false
   };
   // take notice of the array brackets, and
   // the copying of array elements into state ,
   // plus adding a new object
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
           list={this.state.list} //passing state as props
           toggleTask={this.toggleTask} // drilling down 
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
