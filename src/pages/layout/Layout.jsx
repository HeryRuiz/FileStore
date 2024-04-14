import React from "react";
import { Outlet } from "react-router-dom";
import Nav from './Nav.jsx'
import Footer from "./Footer.jsx";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
