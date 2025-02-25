import React, { useState } from "react";
import "./Project_02.css";
import Todos from "./Todos";
import New_Todo from "./New_Todo";
import { v4 as uuidv4 } from 'uuid';

export default function Project_02() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (todo) => {
        setTodos((previousTodo)=>{
            return [...previousTodo, {id:uuidv4(), todo}]
        })
    }

    const handleRemoveTodo = (id) => {
        setTodos((previousTodo)=>{
            const filteredTodo = previousTodo.filter((todo)=>todo.id !== id);
            return filteredTodo;
        })
    }

  return (
    <div className="home_container">
      <h1 className="home_h1">Todo App</h1>
      <New_Todo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  );
}
