import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
function App() {
  let [todos, setTodos] = useState([]);
  let [filteredTodos, setFilteredTodos] = useState([]);
  let [selected, setSelected] = useState("all");

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    switch (selected) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos.map((el) => el));
        break;
    }
    saveLocalTodos();
  }, [todos, selected]);

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalTodos() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(todos))
      );
      setTodos(todoLocal);
    }
  }
  return (
    <div className="main-container">
      <Form setSelected={setSelected} todos={todos} setTodos={setTodos} />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
