import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logoutUser } = useAuth();
  return (
    <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">End-To-End Todos App</h1>
      <button onClick={logoutUser} className="bg-red-500 px-4 py-1 rounded">
        Logout
      </button>
    </div>
  );
}