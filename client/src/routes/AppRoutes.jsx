import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
