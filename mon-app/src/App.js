// react
import React, {useEffect} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"; 

// pages and components
import Header from "./components/Header";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import User from './pages/User'
import Error from "./pages/Error";

// style
import './css/main.css'

export default function App() {
  useEffect(() => {
    let origin = window.localStorage.getItem("origin")
    if(!origin) window.localStorage.setItem("origin", "api");
  },
  []
  )
    
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="app__layout">
          <NavBar />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="*" element={<Error />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}
