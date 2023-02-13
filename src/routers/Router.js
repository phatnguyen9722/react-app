import React from 'react'

import HomePage from  '../pages/HomePage'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Login from '../pages/Login'
import CheckOut from '../pages/CheckOut'
import SignUp from '../pages/SignUp'

import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/CheckOut",
    element: <CheckOut/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
]);

export default router
