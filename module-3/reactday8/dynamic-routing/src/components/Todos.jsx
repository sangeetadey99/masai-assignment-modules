import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
          onClick={() => navigate(`/todos/${todo.id}`)}
        >
          <h4>{todo.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default Todos;
