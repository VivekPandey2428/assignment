import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { auth } from "./GoogleLogin";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(user);
    });
    return () => unsubscribe(); 
  }, [isAuthenticated]);
  console.log(isAuthenticated)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login authUser={isAuthenticated}/>} />
          <Route path="/home" element={isAuthenticated && <Home authUser={isAuthenticated}/>} />
          <Route path="/" element={isAuthenticated ? <Navigate to="/home"/> : <Navigate to="/login"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
