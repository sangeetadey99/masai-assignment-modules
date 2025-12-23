import { useContext, useRef } from "react";
import { TodoContext } from "./TodoContext";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef("");

  const handleAdd = () => {
    if (inputRef.current.value === "") return;
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;
