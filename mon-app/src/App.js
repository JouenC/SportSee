// react
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"; 

// pages and components
import Header from "./components/Header";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
// import Error from "./pages/Error";
// import User from "./pages/User";

// style
import './css/main.css'

export default function App() {
    
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <NavBar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            {/*<Route path="/user/:id" element={<User />} />
            <Route path="*" element={<Error />} /> */}
        </Routes> 
    </BrowserRouter>
  );
}
