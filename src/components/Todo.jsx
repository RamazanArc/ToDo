import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />{" "}
      {/*stateleri props olarak veriyoruz*/}
      <TodoList todos={todos} />
    </div>
  );
}
