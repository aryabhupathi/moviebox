import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import ShowGrid from "./components/show/ShowGrid";
import ActorGrid from "./components/actor/ActorGrid";
import Show from "./pages/Show";
import Login from "./all/Login";
import Header from "./Header/Header";
import { AuthProvider, useAuth } from "./all/AuthContext";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: linear-gradient(to right, #caa4f0, #9dcded); 
  }
`;
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/starred"
          element={
            <ProtectedRoute>
              <Starred />
            </ProtectedRoute>
          }
        />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/shows" element={<ShowGrid />} />
        <Route path="/actors" element={<ActorGrid />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
