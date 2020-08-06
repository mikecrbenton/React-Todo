import React from 'react';
import './Todo.css'
import styled from 'styled-components';

//**FUNCTIONAL COMPONENT**
const Todo = (props) => {

  return (
    <TodoItem
      //toggles the classname 
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={(e) => props.toggleTask(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </TodoItem>
  );
};

export default Todo;

const TodoItem = styled.div`
   background-color: #009B77;
   width: 45%;
   padding: .2em .4em;
   margin: .3em 0;
`;