import React from "react";
import cross from "../images/icon-cross.svg";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          {this.props.todoList.map((todo, index) => {
            const classNameBtn = todo["completed"]
              ? "todo__check active"
              : "todo__check";
            return (
              <li key={index} className="todo">
                <button
                  className={classNameBtn}
                  onClick={() => this.props.onCheck(todo)}></button>
                <p
                  className={
                    todo.completed
                      ? "todo__description checked"
                      : "todo__description"
                  }>
                  {todo["description"]}
                </p>
                <button
                  className="todo__delete"
                  onClick={() => this.props.onDelete(todo)}>
                  <img src={cross} alt="" />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="todo-control">
          <button>{this.props.todoList.length} items left</button>
          <button onClick={this.props.onClear}>clear</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
