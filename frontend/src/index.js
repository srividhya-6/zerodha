import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignUp from "./landing_page/signup/SignUp";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import Pricingpage from "./landing_page/pricing/Pricingpage";
import SupportPage from "./landing_page/support/SupportPage";
import HomePage from './landing_page/home/HomePage';
import NavBar from "./landing_page/NavBar";
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/login/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/pricing" element={<Pricingpage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
