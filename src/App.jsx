import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {

  return (
    <>
      <>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
