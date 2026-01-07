import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTodos, addTodo, deleteTodo, toggleTodo } from "../services/todo.service";

export default function TodoList() {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const data = await getTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!text) return;
    await addTodo({ title: text, completed: false, uid: user.uid });
    setText("");
    loadTodos();
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 rounded">
          Add
        </button>
      </div>

      {todos.map((t) => (
        <div key={t.id} className="flex justify-between items-center mb-2">
          <span
            onClick={() => toggleTodo(t.id, !t.completed).then(loadTodos)}
            className={t.completed ? "line-through text-gray-400 cursor-pointer" : "cursor-pointer"}
          >
            {t.title}
          </span>
          <button onClick={() => deleteTodo(t.id).then(loadTodos)} className="text-red-500">
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}