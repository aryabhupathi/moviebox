// Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components'; // Import styled-components

// Styled components
const FormContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
    text-align: center;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box; /* Ensure padding and border are included in the element's width */

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    box-sizing: border-box; /* Ensure consistency with input width */

    &:hover {
        background-color: #0056b3;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`;


const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            login(username, password); // Attempt to log in
            setError(''); // Clear any previous error
            navigate('/starred'); // Redirect to starred page on successful login
        } catch (err) {
            setError(err.message); // Display error message if login fails
        }
    };

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SubmitButton type="submit">Login</SubmitButton>
            </form>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </FormContainer>
    );
};

export default Login;
