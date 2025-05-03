import React, { useState } from "react";
import { Form } from "./Form";
import { Todos } from "./Todos";

export const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is brand new title - 1",
      description: "This is brand new description - 1",
    },
    {
      id: 2,
      title: "This is brand new title - 2",
      description: "This is brand new description - 2",
    },
    {
      id: 3,
      title: "This is brand new title - 3",
      description: "This is brand new description - 3",
    },
  ]);

  const [id, setId] = useState("");

  const deleteTodo = (id) => {
    setTodos(todos.filter((curElem) => curElem.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1 style={{ color: "teal" }} className="text-center">
          React Todo List CRUD App
        </h1>
        <Form todos={todos} setTodos={setTodos} id={id} setId={setId} />
        <Todos items={todos} deleteTodo={deleteTodo} setId={setId} />
      </div>
    </>
  );
};
