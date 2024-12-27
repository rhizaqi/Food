import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import MainPage2 from "../pages/mainPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage2 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
