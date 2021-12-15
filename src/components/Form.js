import React, { useState } from "react";
import "./Form.css";

function Form({ todos, setTodos, setSelected }) {
  let [inputText, setInputText] = useState("");
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function todoHandler(e) {
    e.preventDefault();
    if (inputText) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random(),
        },
      ]);
    }

    setInputText("");
  }

  function slectorHandler(e) {
    setSelected(e.target.value);
  }
  return (
    <div className="form-container">
      <form>
        <input
          onChange={inputTextHandler}
          value={inputText}
          className="input-text"
          type="text"
          placeholder="write your todo here"
        />
        <input
          onClick={todoHandler}
          className="input-submit"
          type="submit"
          value="add todo"
        />
        <select onChange={slectorHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
