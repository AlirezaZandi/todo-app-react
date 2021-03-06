import React from "react";
import Filters from "./components/Filters";
import InputTodo from "./components/InputTodo";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import "./styles/style.css";

class App extends React.Component {
  state = {
    darkTheme: true,
    todoList: [],
    filter: "all",
  };

  handleSubmit = (description) => {
    const todoList = [...this.state.todoList];
    todoList.push({ description: description, completed: false });
    console.log(this.state.todoList);
    this.setState({ todoList });
  };

  handleCheck = (todo) => {
    const todoList = [...this.state.todoList];
    const index = todoList.indexOf(todo);
    const todo1 = { ...todoList[index] };
    todoList[index] = todo1;
    todo1["completed"] = !todo1["completed"];
    this.setState({ todoList });
  };

  handleClear = () => {
    const todoList = [];
    this.setState({ todoList });
  };

  handleDelete = (todo) => {
    const todoList = [...this.state.todoList];
    const index = todoList.indexOf(todo);
    todoList.splice(index, 1);
    this.setState({ todoList });
  };

  handleFilter = (filter) => {
    this.setState({ filter });
  };

  handleThemeChange = () => {
    const darkTheme = !this.state.darkTheme;
    this.setState({ darkTheme });
  };

  render() {
    const { todoList, filter, darkTheme } = this.state;
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
    const appClass = darkTheme ? "App" : "App light";
    return (
      <div className={appClass}>
        <header>
          <Title dark={darkTheme} onThemeChange={this.handleThemeChange} />
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
