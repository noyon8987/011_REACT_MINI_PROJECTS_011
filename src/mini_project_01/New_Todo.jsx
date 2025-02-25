import React, { useState } from "react";

export default function NewTodo(props) {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo);
    setTodo("");
  };

  return (
    <div className="newdiv">
      <form onSubmit={handleSubmit}>
        <label>NewTodo:</label>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit">AddTodo</button>
      </form>
    </div>
  );
}
