import React from "react";
import cross from "../images/icon-cross.svg";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          <li className="todo">
            <button className="todo__check active"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
          <li className="todo">
            <button className="todo__check"></button>
            <p className="todo__description">learn JS</p>
            <button className="todo__delete">
              <img src={cross} alt="" />
            </button>
          </li>
        </ul>
        <div className="todo-control">
          <button>5 items left</button>
          <button>clear</button>
        </div>
      </div>
    );
  }
}

export default TodoList;
