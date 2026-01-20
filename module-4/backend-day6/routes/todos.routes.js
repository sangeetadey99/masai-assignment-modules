import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "db.json";


const readDB = () => {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

router.post("/add", (req, res) => {
  const db = readDB();

  const newTodo = {
    id: Date.now(),
    ...req.body,
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
});

router.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.todos);
});

router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const todo = db.todos.find((t) => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(todo);
});

router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const index = db.todos.findIndex((t) => t.id === todoId);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.status(200).json(db.todos[index]);
});

router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const updatedTodos = db.todos.filter((t) => t.id !== todoId);

  if (updatedTodos.length === db.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos = updatedTodos;
  writeDB(db);

  res.status(200).json({ message: "Todo deleted successfully" });
});

export default router;
