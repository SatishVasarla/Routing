  import React from "react";
import ContactUs from './Contactus';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";

import Home from './Home';

import Cart from './Cart';


const App = () => {
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="Cart" exact element={<Cart/>} />
            <Route Path="Contact" exact element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;