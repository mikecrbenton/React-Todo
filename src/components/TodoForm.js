import React from "react";
import styled from 'styled-components';
import './Todo.css';

class ListForm extends React.Component {
  // In a class component, props are
  // extended from React.Component?
  constructor() {
    super();
    this.state = 
    {
      todoText: ""
    };
  }

  changeHandler = e => {
    //
    this.setState(
      {
         [e.target.name]: e.target.value
      }
    );
    };

  submitHandler = e => {
    e.preventDefault();
    // cant just call props -> need "this"
    // because in a class component
    // addItem() is up in App.js top level state
    this.props.addTask(this.state.todoText);
    // reset clear form
    this.setState({ todoText: "" });
  };

  //EVERY CLASS NEEDS A RENDER!
  render() {
     
    return (
      <TodoForm onSubmit={this.submitHandler}>
        <input
          type="text"
          name="todoText"
          onChange={this.changeHandler} // setState
          value={this.state.todoText} //controlled input - view State
        />
        <button type="submit">Add</button>
      </TodoForm>
    );
  }
}

export default ListForm;

const TodoForm = styled.form`
margin-bottom: 1em;
display: flex;
justify-content: center;

   input{
      background-color: #2d2d37;
      border: none;
      border-bottom: 2px solid #009B77;
      color: whitesmoke;
      font-family: lato; 
      font-size: 1rem;
      font-weight: 900;
      padding: .5em .3em;
   }
   button{
      background-color: #009B77;
      border: 1px solid #009B77;
      margin-left: .5em;
      color: whitesmoke;
      padding: .5em 2em;
      font-size: 1rem;
      box-shadow: 0px 0px 20px #121212;
   }
`;