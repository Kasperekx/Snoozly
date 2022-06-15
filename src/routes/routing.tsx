import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import LoginPage from "../pages/Login";
import Register from "pages/Register";
import UserPanel from "pages/UserPanel";
import { useAuth } from "contexts/AuthContext";
import Tasks from "../pages/Tasks";

const Routing = () => {
  // @ts-ignore TODO:
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/panel"
          element={currentUser ? <UserPanel /> : <LoginPage />}
        />
        <Route
          path="/tasks"
          element={currentUser ? <Tasks /> : <LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
