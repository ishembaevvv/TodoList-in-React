import React, { useContext } from "react";
import scss from "./TodoItem.module.scss";
import { Context } from "../../Context";

export default function TodoItem({ todo, id }) {
  const {deleteTodo, completeTodo} = useContext(Context);

  return (
    <div className={scss.todoItem} style={todo.complete ? ready : notReady}>
      {todo.text}
      <div className={scss.btns}>
        <button onClick={() => completeTodo(id)}>
          {todo.complete ? "Back" : "Complete"}
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
