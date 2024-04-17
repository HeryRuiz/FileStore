import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { auth, getUserByUID } from "./pages/firebase/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
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
  const [currentUser, setCurrentUser] = useState({});
  const [signedin, setSignedIn] = useState(false);
  const [load, setLoad] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        setSignedIn(true);
        setLoad(true);
        setTimeout(() => {
          getUserByUID(user.uid).catch((error) => {
            setError(error.message);
          });
        }, 500);
      } else {
        setLoad(false);
        setSignedIn(false);
      }
    });
  }, []);

function popup(pop) {
    document.querySelector(`.${pop}`).style.top = "1rem";
    setTimeout(() => {
        document.querySelector(`.${pop}`).style.top = "-100px";
    }, 2000);
}
  return (
    <>
      <>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout signedin={signedin} />}>
              <Route path="/" element={<Hero />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset" element={<Password />} />
              {"private route"}
              {load ? (
                <Route path="/home" element={<Home popup={popup}/>} />
              ) : (
                <Route path="/home" element={<Login />} />
              )}
            </Route>
          </Routes>
        </Router>
      </>
    </>
  );
}

export default App;
