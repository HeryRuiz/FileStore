import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
function Layout({ signedin }) {
  return (
    <>
      <Nav signedin={signedin} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
