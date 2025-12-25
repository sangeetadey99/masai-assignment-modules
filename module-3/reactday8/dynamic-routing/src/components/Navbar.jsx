import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/todos">Todos</Link>
    </div>
  );
}

export default Navbar;
