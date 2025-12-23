import TodoContextProvider from "./TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Todos() {
  return (
    <TodoContextProvider>
      <h2>Todo App</h2>
      <AddTodo />
      <TodoList />
    </TodoContextProvider>
  );
}

export default Todos;
