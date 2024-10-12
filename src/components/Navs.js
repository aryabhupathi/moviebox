// Navs.js
import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from '../all/AuthContext' // Import the Auth context
import { NavList, LinkStyled } from "./Navs.styled";

const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];

const Navs = () => {
  const location = useLocation();
  const { user } = useAuth(); // Get user from auth context

  return (
    <NavList>
      {LINKS.map((item) => {
        // Render "Starred" link only if the user is logged in
        if (item.text === "Starred" && !user) {
          return null; // Don't render if user is not authenticated
        }
        return (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? "active" : ""}
            >
              {item.text}
            </LinkStyled>
          </li>
        );
      })}
    </NavList>
  );
};

export default Navs;
