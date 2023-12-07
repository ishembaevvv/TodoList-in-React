import React, { useContext } from "react";
import scss from "./TodoItem.module.scss";
import { Context } from "../../Context";

export default function TodoItem({ todo, id }) {
  const {deleteTodo, completeTodo} = useContext(Context);

  return (
    <div className={scss.todoItem} style={todo.completed ? ready : notReady}>
      <span className={scss.id}>{todo.id}</span>
      {todo.text}
      {todo.title}
      <div className={scss.btns}>
        <button onClick={() => completeTodo(id)}>
          {todo.completed ? "Back" : "Complete"}
        </button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
    </div>
  );
}

const ready = {
  textDecoration: "line-through",
  color: "#fff",
};
const notReady = {
  textDecoration: "none",
  color: "black",
};
