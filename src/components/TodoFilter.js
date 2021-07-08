import React from "react";
import styled from 'styled-components';
import './Todo.css';

class FilterForm extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      filterText: ""
    };
  }

  changeHandler = (e) => {
    this.setState( 
      { 
        ...this.state,
        [e.target.name]: e.target.value 
      });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.filterTask(this.state.filterText);
    // reset clear form
    this.setState({ filterText: ""});
  };

  render() {
     
    return (
      <SearchForm onSubmit={this.submitHandler}>
        <input
          type="text"
          name="filterText"
          onChange={this.changeHandler} // setState
          value={this.state.filterText} //controlled input - view State
        />
        <button type="submit" >Search</button>
      </SearchForm>
    );
  }
}

export default FilterForm;

const SearchForm = styled.form`
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