import { useNavigate } from "react-router-dom";
import { useAuth } from "../all/AuthContext";
const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
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
      <div onClick={() => navigate("/")} style={{ color: "red" }}>
        MOVIE FINDER
      </div>
      <div>
        {user ? (
          <button onClick={handleLogout} style={{ color: "red" }}>
            Logout
          </button>
        ) : (
          <button onClick={() => navigate("/login")} style={{ color: "red" }}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
