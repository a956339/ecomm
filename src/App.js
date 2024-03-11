

import React from "react";
import Login from "./Componnet/Login";
import Registration from "./Componnet/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Componnet/Pages/Navbar";
import Home from "./Componnet/Pages/Home";
import Contact from "./Componnet/Pages/Contact";
import About from "./Componnet/Pages/About";
import Service from "./Componnet/Pages/Service";
import { Provider } from "react-redux";
import { store } from "./Componnet/Redux/Store";
import Cartpage from "./Componnet/Pages/Cartpage";

const App = () => {
  return (
    <div>
      
      <Provider store={store}>
      <BrowserRouter>
      
      <Routes>
        <Route path="/Home" element={<div><Navbar /><Home/></div>} />
        <Route path="/Services" element={<div><Navbar/><Service/></div>} />
        <Route path="/About" element={<div><Navbar /><About/></div>} />
        <Route path="/Contact" element={<div><Navbar /><Contact/></div>} />
        <Route path="/" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Cartpage" element={<><Navbar /><Cartpage /></>} />
        </Routes>
    </BrowserRouter>
      </Provider>

      
      
    </div>
  );
};

export default App;
