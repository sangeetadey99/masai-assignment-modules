import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

export default function Todos() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <TodoList />
    </div>
  );
}