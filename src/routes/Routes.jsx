import {
    createBrowserRouter,
    
  } from "react-router-dom"
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddCraftItem from "../pages/AddCraftItem";
import CraftDetailsPage from "../pages/CraftDetailsPage";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/cards`)
      },
      {
        path:'/card/:id',
        element:<CraftDetailsPage></CraftDetailsPage>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/card/${params.id}`)
      },
        {
        path:"/login",
        element:<Login></Login>
      },
        {
        path:"/register",
        element:<Register></Register>
      },
        {
        path:"/addCraftItem",
        element:<AddCraftItem></AddCraftItem>
      },
    ]
    },
  ]);
  export default router;
  