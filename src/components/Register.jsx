import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const URL = 'https://localhost:7249/apiuser/register'
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({email: email, username: username, password: password})
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log(URL, options)
        try {
            const response = await fetch(URL, options)
            if (response.ok) {
                navigate('/')
            } else {
                console.error('Register failed:', response.status)
            }
        } catch (error) {
            console.error('Register failed:', error)
        }
    }

    return (
        <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="register-button">Register</button>
            </form>
            <h3>Are you registered?</h3>
            <button type="submit" className="login-button" onClick={() => navigate('/')}>Login!</button>
        </div>
    )
}