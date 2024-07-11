import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Header from "./components/Header";
// import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
// import Error from "./pages/Error";
// import User from "./pages/User";

export default function App() {
    
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Header />
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="*" element={<Error />} />
        </Routes> */}
    </BrowserRouter>
  );
}
