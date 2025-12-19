import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 15));
      });

    return () => {
      alert("cleanup worked");
    };
  }, []);

  if (!show) {
    return (
      <button onClick={() => setShow(true)}>
        Mount Todos
      </button>
    );
  }

  return (
    <div>
      <h2>Todo List</h2>

      <button onClick={() => setShow(false)}>
        Unmount Todos
      </button>

      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
