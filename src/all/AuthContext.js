// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User starts as null (not logged in)

    const login = (username, password) => {
        // Simulated authentication logic
        if (username === "user" && password === "password") {
            setUser({ username });
        } else {
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
