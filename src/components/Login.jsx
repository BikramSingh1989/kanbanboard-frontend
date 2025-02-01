import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "password") {
            alert("Login Successful!");
            onLogin(); // Switch to KanbanBoard
        } else {
            alert("Invalid Credentials!");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
