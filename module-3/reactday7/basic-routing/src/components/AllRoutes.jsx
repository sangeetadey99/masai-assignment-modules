import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todos from "./Todos";
import NotFound from "./NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;
