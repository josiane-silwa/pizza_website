import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Home_1 from "./pages/Home_1";
import Login from "./pages/Login";
import Login_1 from "./pages/Login_1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home", element: <Home />,
  },
  {
    path: "/login_1", element: <Login_1 />,
  },
  {
    path: "/home_1", element: <Home_1 />,
  }
]);