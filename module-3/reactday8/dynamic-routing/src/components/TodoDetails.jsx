import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TodoDetails() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [todoId]);

  if (!todo) return <h3>Loading...</h3>;

  return (
    <div>
      <h3>Todo ID: {todo.id}</h3>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TodoDetails;
