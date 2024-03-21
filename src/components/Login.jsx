import React, { useEffect, useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        body: JSON.stringify({data})
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, options);
            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
                setLoggedIn(true); 
                history.push('/home'); 
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
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    )
}