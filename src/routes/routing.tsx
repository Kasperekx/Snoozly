import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import LoginPage from "../pages/Login";
import Register from "pages/Register";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
