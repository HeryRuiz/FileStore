import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";

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
            <Route path="/" element={'adwawd'} />
            </Route>
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
