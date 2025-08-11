import { Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
