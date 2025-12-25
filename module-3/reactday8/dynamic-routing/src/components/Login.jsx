import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (email === "admin@gmail.com" && password === "admin@123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/todos");
    } else {
      setError("Invalid email or password");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>{error}</p>
    </div>
  );
}

export default Login;
