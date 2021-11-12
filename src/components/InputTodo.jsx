import React from "react";

class InputTodo extends React.Component {
  state = {
    inputValue: "",
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({ inputValue: "" });
      this.props.onSubmit(this.state.inputValue);
    }
  };

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  render() {
    return (
      <div className="input-todo">
        <button
          className="input__btn"
          onClick={() => this.props.onSubmit(this.state.inputValue)}></button>
        <input
          value={this.state.inputValue}
          className="input__input"
          type="text"
          name="todo"
          id="todo"
          onChange={(e) => this.handleChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        />
      </div>
    );
  }
}

export default InputTodo;
