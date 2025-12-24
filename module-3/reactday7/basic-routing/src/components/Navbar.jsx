import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </nav>
  );
}

export default Navbar;
