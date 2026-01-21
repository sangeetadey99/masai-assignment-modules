import { readTodos, writeTodos } from "../models/todoModel.js";

export const getTodos = (req, res) => {
  try {
    const todos = readTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

export const addTodo = (req, res) => {
  try {
    const todos = readTodos();

    const newTodo = {
      id: Date.now(),
      title: req.body.title,
      completed: false
    };

    todos.push(newTodo);
    writeTodos(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to add todo" });
  }
};

export const updateTodo = (req, res) => {
  try {
    const todos = readTodos();
    const id = Number(req.params.id);

    const index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = { ...todos[index], ...req.body };
    writeTodos(todos);

    res.status(200).json(todos[index]);
  } catch (error) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

export const deleteTodo = (req, res) => {
  try {
    const todos = readTodos();
    const id = Number(req.params.id);

    const filteredTodos = todos.filter(todo => todo.id !== id);

    if (filteredTodos.length === todos.length) {
      return res.status(404).json({ message: "Todo not found" });
    }

    writeTodos(filteredTodos);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
