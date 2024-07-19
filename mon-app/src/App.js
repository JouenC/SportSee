// react
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"; 

// pages and components
import Header from "./components/Header";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import User from './pages/User'
// import Error from "./pages/Error";

// style
import './css/main.css'

export default function App() {
    
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="app__layout">
          <NavBar />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<User />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}
