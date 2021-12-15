import React from "react";
import List from "./List";

import "./TodoList.css";

function TodoList({ filteredTodos, setTodos, todos }) {
  return (
    <div className="ul-container">
      <ul className="ul">
        {filteredTodos.map((todo) => {
          return (
            <List setTodos={setTodos} todos={todos} key={todo.id} todo={todo} />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
