import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoById } from "../api/todoService";

function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id).then((data) => setTodo(data));
  }, [id]);

  if (!todo) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Todo Details</h2>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TodoDetails;
