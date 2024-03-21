import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const URL = 'https://localhost:7249/apiuser/login'
    const data = {
        email: email,
        password: password,
    };
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({email: email, password: password})
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(URL, options)
        try {
            const response = await fetch(URL, options)

            if (response.ok) {
                const { token } = await response.clone().json();
                const { id } = await response.clone().json();
                console.log(id)
                localStorage.setItem('token', token);
                localStorage.setItem('userid',  id)
                navigate('/');
            } else {
                console.error('Login failed:', response.status);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="login-button" >Login</button>
            </form>
        </div>
    )
}