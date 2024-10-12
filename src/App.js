// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import styled, { createGlobalStyle } from "styled-components";
// import Home from "./pages/Home";
// import Starred from "./pages/Starred";
// import ShowGrid from "./components/show/ShowGrid";
// import ActorGrid from "./components/actor/ActorGrid";
// import Show from "./pages/Show";

// // Create a Global Style component
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     padding: 0;
//     background-image: url('images.jpg'); /* Update with your image path */
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     height:'100%'
//   }
// `;


// const Dashboard = () => <h2>Protected Dashboard</h2>;

// function App() {
//   return (
//     <>
//       <GlobalStyle /> {/* Include GlobalStyle */}
//       <Routes>
//         <Route exact path="/" element={<Home />}></Route>
//         <Route exact path="/starred" element={<Starred />}></Route>
//         <Route exact path="/show/:id" element={<Show />}></Route>
//         <Route path="/shows" element={<ShowGrid />}></Route>
//         <Route path="/actors" element={<ActorGrid />}></Route>
//         <Route path="*" element={<div>Not found</div>} /> {/* Fix for Not found */}
//       </Routes>
//     </>
//   );
// }

// export default App;

// App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import ShowGrid from "./components/show/ShowGrid";
import ActorGrid from "./components/actor/ActorGrid";
import Show from "./pages/Show";
import Login from "./all/Login"; 
import Header from "./Header/Header";
import { AuthProvider, useAuth } from './all/AuthContext'; 

// Create a Global Style component
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url('images.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
  }
`;

// Protected Route component
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
            <Header/>
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
