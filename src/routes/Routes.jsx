import { createBrowserRouter } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
]);

export default router;