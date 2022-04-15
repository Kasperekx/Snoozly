import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import LoginPage from "../pages/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
