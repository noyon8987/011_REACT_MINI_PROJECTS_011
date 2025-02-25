import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./New_Todo";

const previousTodos = ["Todo1", "Todo2", "Todo3"];

export default function Project_01() {
  const [todos, setTodos] = useState(previousTodos);

  const handleOnTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="home-div">
      <NewTodo onTodo={handleOnTodo} />
      <Todos todos={todos} />
    </div>
  );
}
