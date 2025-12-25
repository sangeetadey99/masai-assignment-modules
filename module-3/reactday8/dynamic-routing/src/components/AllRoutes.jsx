import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Todos from "./Todos";
import TodoDetails from "./TodoDetails";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        }
      />

      <Route
        path="/todos/:todoId"
        element={
          <ProtectedRoute>
            <TodoDetails />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
