import React from "react";

class ListForm extends React.Component {
  //LIKE JAVA YOU CAN PASS INTO THE CONSTRUCTOR AND SUPER
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }

  changeHandler = e => {
    //takes an object
    this.setState(
      {
         [e.target.name]: e.target.value
      }
    );
    };

  submitHandler = e => {
    e.preventDefault();
    // cant just call props -> need "this"  addItem() is up in App.js
    this.props.addTask(e, this.state.todoText);
    // reset clear form
    this.setState({ todoText: "" });
  };

  //EVERY CLASS NEEDS A RENDER!
  render() {
     
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.todoText} //controlled input
          name="todoText"
          onChange={this.changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default ListForm;
