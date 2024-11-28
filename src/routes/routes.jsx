import { createBrowserRouter } from "react-router-dom";
import { Submit } from "../components/Submit";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Submit/>,
    },
])