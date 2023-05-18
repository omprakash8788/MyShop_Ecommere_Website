import React from "react"
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";

//  create layout 

const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


//create router 
const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        // api.js data part
        loader:productsData, // now you go to home page
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/login",
        element:<Login/>,
      }
    ]

  }
])


function App() {
  return (
    <div className="font-bodyFont">
      {/* <Header/>
      <Home/>
      <Footer/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
