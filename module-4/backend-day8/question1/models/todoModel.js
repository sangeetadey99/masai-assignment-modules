import fs from "fs";

const DB_FILE = "./db.json";

export const readTodos = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data).todos;
};

export const writeTodos = (todos) => {
  fs.writeFileSync(
    DB_FILE,
    JSON.stringify({ todos }, null, 2)
  );
};
