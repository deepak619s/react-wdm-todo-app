import React from "react";

export const Todos = ({ items, deleteTodo, setId }) => {
  return (
    <>
      <div className="container text-center">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {items.map((todos, index) => (
            <tbody key={index}>
              <tr>
                <td>{todos.title}</td>
                <td>{todos.description}</td>
                <td>
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => setId(todos.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todos.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};
