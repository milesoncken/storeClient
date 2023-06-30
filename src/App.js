import { useEffect, useState } from "react";
import React from "react";
import Home from "./scenes/home/Home.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar.jsx";
import CartMenu from "./scenes/global/CartMenu.jsx";
import Footer from "./scenes/global/Footer.jsx";
import Login from "./scenes/auth/Login.jsx";
import SignUp from "./scenes/auth/SignUp.jsx";
import Dashboard from "./scenes/dashboard/Dashboard.jsx";
import Authenticated from "./routes/Authenticated.jsx";
import About from "./scenes/about/About.jsx";
import Privacy from "./scenes/about/Privacy.jsx";
import Terms from "./scenes/about/Terms.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='item/:itemId' element={<ItemDetails />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkout/success' element={<Confirmation />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route
            path='dashboard'
            element={
              <Authenticated>
                <Dashboard></Dashboard>
              </Authenticated>
            }
          />
          <Route path='about' element={<About />} />
          <Route path='terms' element={<Terms />} />
          <Route path='privacy' element={<Privacy />} />
        </Routes>

        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
