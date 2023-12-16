import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import Main from "../components/Layout/Main";
import Users from "../components/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Main />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/home",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default router;