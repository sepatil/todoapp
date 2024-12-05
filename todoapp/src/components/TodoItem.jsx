import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
    //console.log(newArray);
  }
  console.log(item.done);
  const className = item.done == true ? styles.completed : "";
  console.log(className);
  return (
    <div>
      <h3>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)}>X</button>
        </span>
      </h3>
    </div>
  );
}
