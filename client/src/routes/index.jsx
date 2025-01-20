import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import MainPage2 from "../pages/mainPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage2 />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
