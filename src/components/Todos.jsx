import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2 className="text-center font-semibold text-2xl">Todos</h2>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-700 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
