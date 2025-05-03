import React, { useEffect } from "react";
import { useState } from "react";

export const Form = ({ todos, setTodos, id, setId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (id) {
      updateById(id);
      setId("");
    } else {
      const obj = {
        id: Math.random(),
        title,
        description,
      };

      setTodos([...todos, obj]);
    }

    setId("");
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (id) {
      const updatedData = todos.filter((curElem) => curElem.id === id);
      console.log(updatedData[0]);
      setTitle(updatedData[0].description);
      setDescription(updatedData[0].description);
    }
  }, [id]);

  const updateById = (id) => {
    const obj = {
      title,
      description,
    };

    setTodos((prevData) =>
      prevData.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div
          className="container my-5 text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className="mx-2"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="mx-2"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {id && <button className="btn btn-warning">Edit</button>}
          {!id && <button className="btn btn-warning">Add</button>}
        </div>
      </form>
    </>
  );
};
