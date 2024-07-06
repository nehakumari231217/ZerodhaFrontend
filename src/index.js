import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from "./landing_page/Home/homepage.js";
import Navbar from "./landing_page/Navbar.js";
import Footer from "./landing_page/Footer.js";
import Signup from "./landing_page/Signup/signup.js";
import Aboutpage from "./landing_page/About/Aboutpage.js";
import PricingPage from './landing_page/Pricing/Pricingpage.js';
import Universe from './landing_page/Product/Universe.js';
import  Supportpage  from './landing_page/Supporting/Supportpage.js';
import NotFound from './landing_page/NotFound.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar />
    <Routes>
    <Route path="/" element={< HomePage />} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/about" element={<Aboutpage/>}  />

   <Route path="/pricing" element={< PricingPage/>}/>
  <Route path="/product" element={<Universe />} />
  <Route path="/support" element={<Supportpage/>} />
  <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer/> 
  </BrowserRouter>
);


