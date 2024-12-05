import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.modernInput}
          placeholder="Enter todo item"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
        />
        <button className={styles.modenButton}>Add</button>
      </form>
    </div>
  );
}
