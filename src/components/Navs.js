import { useLocation } from "react-router-dom";
import { useAuth } from "../all/AuthContext";
import { NavList, LinkStyled } from "./Navs.styled";
const LINKS = [
  { to: "/", text: "Home" },
  { to: "/starred", text: "Starred" },
];
const Navs = () => {
  const location = useLocation();
  const { user } = useAuth();
  return (
    <NavList>
      {LINKS.map((item) => {
        if (item.text === "Starred" && !user) {
          return null;
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
