// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import styled from 'styled-components';

const ToDoList = ({ list, toggleTask, clearCompleted }) => {
  return (
    <ListContainer> 
      <TodoList>
         { list.map( todo => {
         return <Todo 
                     todo={todo} 
                     key={todo.id} 
                     toggleTask={toggleTask} 
                  />;
         })}
      </TodoList>
      <button onClick={clearCompleted}>
         Clear Completed
      </button>
    </ListContainer>
  );
};

export default ToDoList;

const TodoList = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
`;

const ListContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;

   button{
      background-color: #009B77;
      border: 1px solid #009B77;
      margin-left: .5em;
      color: whitesmoke;
      padding: .5em 2em;
      font-size: 1rem;
      margin: 1em auto;
      width: 45%;
      box-shadow: 0px 0px 20px #121212;
   }
`;