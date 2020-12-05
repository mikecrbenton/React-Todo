import React from 'react';
import ReactDOM from "react-dom";
import './components/Todo.css'
import list from './components/data'
import TodoForm from './components/TodoForm'
import FilterForm from './components/TodoFilter'
import TodoList from './components/TodoList'
import styled from 'styled-components';

/* functional -> 'props' class -> 'this.props' */

/* INDEX:
-- toggleTask(id) 
-- addTask(text)
-- filterTask(text)
-- clearCompleted()
-- reset()
*/


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
     super();
     //APPLICATION LEVEL STATE
     this.state = {
      list: JSON.parse( window.localStorage.getItem('token') ) //list //list imported from data.js
     };
  }

  componentDidMount(){
      window.localStorage.setItem("token", JSON.stringify(this.state.list) )
  }
  componentDidUpdate(prevProps,prevState){    
      if(prevState !== this.state){
         window.localStorage.setItem("token", JSON.stringify(this.state.list) )
      }
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
           ...task,                    // sends the attributes of the object
           completed: !task.completed  // overrides the equivilant field in that object
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

 filterTask = (filterText) => {
   this.setState({
     list: this.state.list.filter( (item) => { return item.task === filterText })
   });
 }

 clearCompleted = e => {
   e.preventDefault();
   // if item is purchased (item.purchased is true) then filter out
   this.setState({
     list: this.state.list.filter(item => !item.completed)
   });
 };

 resetData = () => {
    this.setState({
       list: list // original list from data file
    })
 }

 
  render() {
    return (
      <Page> 
      <MainContainer>

         <div className="header">
           <h1>To Do List</h1>
           < TodoForm addTask={this.addTask} />
           < FilterForm filterTask={this.filterTask} />
         </div>

         <TodoList
           list={this.state.list} //passing app level state as props
           toggleTask={this.toggleTask} // drilling down 
           clearCompleted={this.clearCompleted}
         />
      </MainContainer>
      <ResetButton onClick={this.resetData}>Reset List</ResetButton>
      </Page>
    );
  }
}

export default App;
const Page = styled.div`
   width: 100%;
`;
const MainContainer = styled.div`
   border: 3px solid #009B77;
   width: 50%;
   margin: 0 auto;
   padding: .5em;
   box-shadow: 0px 0px 20px #060606;

   h1{
      text-align: center;
      color: #009B77;
      font-weight: 900;
      font-size: 2.5rem;
   }
`;
const ResetButton = styled.button`
   display: block;
   margin: 1em auto 0;
   background-color: #009B77;
      border: 1px solid #009B77;
      color: whitesmoke;
      padding: .5em 2em;
      font-size: 1rem;
      font-weight: 700;
      box-shadow: 0px 0px 20px #121212;
`;
