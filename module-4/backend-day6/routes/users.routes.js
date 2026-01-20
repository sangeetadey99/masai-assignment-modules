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

//Create a new user
router.post("/add", (req, res) => {
  const db = readDB();

  const newUser = {
    id: Date.now(),
    ...req.body,
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json(newUser);
});

//GET all users
router.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.users);
});


//GET user by ID
router.get("/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const user = db.users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

//Update user by ID
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const index = db.users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users[index] = { ...db.users[index], ...req.body };
  writeDB(db);

  res.status(200).json(db.users[index]);
});

//Delete user by ID
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const updatedUsers = db.users.filter((u) => u.id !== userId);

  if (updatedUsers.length === db.users.length) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users = updatedUsers;
  writeDB(db);

  res.status(200).json({ message: "User deleted successfully" });
});

export default router;
