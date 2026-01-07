import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input className="w-full mb-3 p-2 border" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full mb-3 p-2 border" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={async () => { await loginUser(email, password); navigate("/todos"); }}
          className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
        <p className="mt-4 text-sm text-center">
          No account? <Link to="/signup" className="text-blue-600">Signup</Link>
        </p>
      </div>
    </div>
  );
}