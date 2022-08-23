import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';

import BonusTop from "./components/BonusTop/BonusTop";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Account from "../src/pages/Account/Account";
import Profile from "./pages/Account/Profile";
import Checkout from "../src/pages/Checkout";
import Help from "../src/pages/Help";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProductPage";
import DeliveryTracking from "./pages/Delivery/DeliveryTracking";
import Footer2 from "./components/Footer2/Footer2";
import CartPage from "./pages/CartPage/CartPage";
import Contact from "./pages/Contact/Contact";
import AdminDashboard from "./pages/Admin/AdminDashboard";

import Categoriesdata from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      const newCart = cartItems.map(item => item.id === exist.id ? { ...item, qty: item.qty + 1 } : item);
      setCartItems(newCart);
    } else {
      const newCart = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCart);
    }
    console.log(cartItems)
  }

  const handleRemove = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist.qty === 1) {
      const newCart = cartItems.filter(item => item.id !== exist.id);
      setCartItems(newCart);
    } else {
      const newCart = cartItems.map(item => item.id === exist.id ? { ...item, qty: item.qty - 1 } : item);
      setCartItems(newCart);
    }
  }
  
  return (
    <BrowserRouter>
      <BonusTop />
      <NavBar countCartItems={cartItems.length} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/account"} element={<Account />} />
        <Route path={"/cartpage"} element={<CartPage cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove}/>} />
        <Route path={"/help"} element={<Help />} />
        <Route path={"/products"} element={<Products Categoriesdata={Categoriesdata} cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove} />} />
        <Route path={"/products/:id"} element={<SingleProduct Categoriesdata={Categoriesdata} cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove}/>} />
        <Route path={"/delivery"} element={<DeliveryTracking />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/admin"} element={<AdminDashboard />} />
        <Route path={"/checkout"} element={<Checkout />} />
      </Routes>

      <Footer2 />
    </BrowserRouter>
  );
}

export default App;
