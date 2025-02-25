import React from "react";

export default function Todo(props) {
  const Todo = props.todo;

  return (
    <div className="todo-div">
      <h1>{Todo}</h1>
    </div>
  );
}
