import express from "express";
import fs from "fs";
import { rateLimiter } from "../middleware/rateLimiter.middleware.js";
import { validateTodo } from "../middleware/validateTodo.middleware.js";

const router = express.Router();
const DB = "./src/db.json";

const readData = () => JSON.parse(fs.readFileSync(DB, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(DB, JSON.stringify(data, null, 2));

router.post("/add", validateTodo, (req, res) => {
  const data = readData();

  const todo = {
    id: Date.now(),
    title: req.body.title,
  };

  data.todos.push(todo);
  writeData(data);

  res.status(201).json(todo);
});

router.get("/", rateLimiter, (req, res) => {
  const data = readData();
  res.json(data.todos);
});

router.get("/:todoId", (req, res) => {
  const data = readData();
  const todo = data.todos.find(
    (t) => t.id === Number(req.params.todoId)
  );

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

router.put("/update/:todoId", (req, res) => {
  const data = readData();
  const index = data.todos.findIndex(
    (t) => t.id === Number(req.params.todoId)
  );

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  data.todos[index].title =
    req.body.title || data.todos[index].title;

  writeData(data);
  res.json(data.todos[index]);
});

router.delete("/delete/:todoId", (req, res) => {
  const data = readData();
  const newTodos = data.todos.filter(
    (t) => t.id !== Number(req.params.todoId)
  );

  if (newTodos.length === data.todos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }

  data.todos = newTodos;
  writeData(data);

  res.json({ message: "Todo deleted successfully" });
});

export default router;
