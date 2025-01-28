import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"",
          element:<Home></Home>
        },
        {
          path:"/details/:id",
          element:<ProjectDetails></ProjectDetails>
        }
      ]
    }
  ]);