import "./App.css";
import Filters from "./components/Filters";
import InputTodo from "./components/InputTodo";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <header>
        <Title />
      </header>
      <main>
        <InputTodo />
        <TodoList />
        <Filters />
      </main>
    </div>
  );
}

export default App;
