import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleClick(name) {
    setTodos(
      todos.map(
        (todo) => (todo.name === name ? { ...todo, done: !todo.done } : todo)
        // tıkladıpımız todonun done özelliğini değiştiriyor
      )
    );
  }
  const doneLine = item.done ? styles.completed : "";
  // todo tamalandı ise style değişiyor
  function handleDelete(item) {
    console.log("Delete button clicked for item ", item);
    setTodos(todos.filter((todo) => todo !== item));
    {
      /* Todoların hepsini dönüyor todo itema eşitse o itemı geri döndürmüyor kaldırmış oluyor */
    }
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={doneLine} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
