import React from "react";

class InputTodo extends React.Component {
  handleKeyDown = () => {
    this.handleClick();
  };
  handleClick = () => {
    console.log(1);
  };

  render() {
    return (
      <div className="input-todo">
        <button className="input__btn" onClick={this.handleClick}></button>
        <input
          className="input__input"
          type="text"
          name="todo"
          id="todo"
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default InputTodo;
