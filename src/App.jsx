import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import Hero from "./pages/hero/Hero";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Password from "./pages/auth/Password";
import Home from "./pages/home/Home";

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
              <Route path="/" element={<Hero />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<Password />} />
              {"private route"}
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
