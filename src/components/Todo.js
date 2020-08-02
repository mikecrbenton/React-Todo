import React from 'react';
import './Todo.css'

const Todo = (props) => {
   console.log(props)
  return (
    <div
      //toggles the classname 
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={(e) => props.toggleTask(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;