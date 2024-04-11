import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register/index";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
]);
