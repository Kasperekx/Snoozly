import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/Home";
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
