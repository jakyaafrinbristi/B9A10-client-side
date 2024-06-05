import {
    createBrowserRouter,
    
  } from "react-router-dom"
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddCraftItem from "../pages/AddCraftItem";
import CraftDetailsPage from "../pages/CraftDetailsPage";
import Error from "../pages/Error";
import MyArtAndCraft from "../pages/MyArtAndCraft";
import AllArtCraftItems from "../pages/AllArtCraftItems";
import Update from "../pages/Update";
import ArtDetails from "../pages/ArtDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/cards`),
      },
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/crafts`),
      },
      {
        path:'/craft/:id',
        element:<ArtDetails></ArtDetails>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/craft/${params.id}`)
      },
      {
        path:'/card/:id',
        element:<CraftDetailsPage></CraftDetailsPage>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/card/${params.id}`)
      },
      {
        path:"/allArtCraftItems",
        element:<AllArtCraftItems></AllArtCraftItems>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/cards`)
      },
  
    
      {
        path:"/myArtAndCraft",
        element:<MyArtAndCraft></MyArtAndCraft>,
  
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
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
  