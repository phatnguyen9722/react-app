import { Routes, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Login from '../pages/Login'
import CheckOut from '../pages/CheckOut'
import SignUp from '../pages/SignUp'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="product" element={<Product />} />
      <Route path="login" element={<Login />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="signup" element={<SignUp />} />
      <Route path='cart' element={<Cart />} />
      <Route />
      <Route />
      <Route />
      <Route />
    </Routes>
  );
}

export default Router;
