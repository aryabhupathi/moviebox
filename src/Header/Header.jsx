// Header.js
import React from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../all/AuthContext"; // Import the Auth context

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // Get user and logout function from context

  const handleLogout = () => {
    logout(); // Call logout function
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#76e3da",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <div
        onClick={() => navigate("/")} style={{color:'red'}}
      >MOVIE FINDER
      </div>
      <div>
        {user ? (
          <button onClick={handleLogout} style={{color:'red'}}>Logout</button> // Show logout if user is logged in
        ) : (
          <button onClick={() => navigate("/login")} style={{color:'red'}}>Login</button> // Show login if user is not logged in
        )}
      </div>
    </div>
  );
};

export default Header;
