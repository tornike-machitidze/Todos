import React, { useState } from "react";
import "./List.css";
function List({ todo, setTodos, todos }) {
  let [isCompleted, setIsCompleted] = useState(false);
  function removeHandler(e) {
    let targetId = e.target.id;
    e.preventDefault();
    setTodos(
      todos.filter((todo) => {
        return Number(todo.id) !== Number(targetId);
      })
    );
  }

  function completeHandler(e) {
    setTodos(
      todos.map((todo) => {
        if (Number(todo.id) === Number(e.target.id)) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );

    setIsCompleted(!isCompleted);
  }
  return (
    <li>
      <p className={todo.completed ? "completed" : "normal"}>{todo.text}</p>
      <div className="separate">
        <div
          className={todo.completed ? "completed-checkbox" : "checkbox"}
          onClick={completeHandler}
          id={todo.id}
        >
          done
        </div>
        <button id={todo.id} onClick={removeHandler}>
          X
        </button>
      </div>
    </li>
  );
}

export default List;
