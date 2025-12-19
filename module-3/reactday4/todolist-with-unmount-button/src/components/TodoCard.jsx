function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", margin: "6px" }}>
      <p>User ID: {userId}</p>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TodoCard;
