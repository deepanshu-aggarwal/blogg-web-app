import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/register";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
