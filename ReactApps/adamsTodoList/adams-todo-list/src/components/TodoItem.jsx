import React from "react";
import styles from "./TodoItem.module.css";
import { BsCardChecklist } from "react-icons/bs";
import { FcFullTrash } from "react-icons/fc";

const TodoItem = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div className={todo.completed ? styles.completed : styles.todoRow}>
      {todo.text}
      <div>
        <BsCardChecklist
          onClick={(_) => completeTodo(todo.id)}
          className={styles.check}
        />
        <FcFullTrash
          onClick={(_) => removeTodo(todo.id)}
          className={styles.trash}
        />
      </div>
    </div>
  );
};
export default TodoItem;
