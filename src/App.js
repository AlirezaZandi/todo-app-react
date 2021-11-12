import React from "react";
import Filters from "./components/Filters";
import InputTodo from "./components/InputTodo";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import "./styles/style.css";

class App extends React.Component {
  state = {
    darekTheme: true,
    todoList: [
      { description: "learn JS", completed: false },
      { description: "hi", completed: true },
      { description: "hi", completed: true },
    ],
    filter: "all",
  };

  handleSubmit = (description) => {
    const todoList = [...this.state.todoList];
    todoList.push({ description: description, completed: false });
    console.log(this.state.todoList);
    this.setState({ todoList });
  };

  handleCheck = (index) => {
    const todoList = [...this.state.todoList];
    const todo = { ...todoList[index] };
    todoList[index] = todo;
    todo["completed"] = !todo["completed"];
    this.setState({ todoList });
  };

  handleClear = () => {
    const todoList = [];
    this.setState({ todoList });
  };

  handleDelete = (index) => {
    console.log(index);
    const todoList = [...this.state.todoList];
    todoList.splice(index, 1);
    this.setState({ todoList });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoList, filter } = this.state;
    let todoListFilter;
    if (filter === "active") {
      todoListFilter = todoList.filter((todo) => {
        if (!todo["completed"]) {
          return todo;
        } else return false;
      });
    } else if (filter === "completed") {
      todoListFilter = todoList.filter((todo) => {
        if (todo["completed"]) {
          return todo;
        } else return false;
      });
    } else {
      todoListFilter = todoList;
    }
    return (
      <div className="App">
        <header>
          <Title />
        </header>
        <main>
          <InputTodo onSubmit={this.handleSubmit} />
          <TodoList
            todoList={todoListFilter}
            onClear={this.handleClear}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
          />
          <Filters onFilter={this.handleFilter} />
        </main>
      </div>
    );
  }
}

export default App;
