import { db } from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

export const getTodos = async (uid) => {
  const snap = await getDocs(collection(db, "todos"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(t => t.uid === uid);
};

export const addTodo = (todo) =>
  addDoc(collection(db, "todos"), todo);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));

export const toggleTodo = (id, completed) =>
  updateDoc(doc(db, "todos", id), { completed });