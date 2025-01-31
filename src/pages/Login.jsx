import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Login Component
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("your_render_backend_url/login", { username, password });
            localStorage.setItem("token", data.token);
            navigate("/kanban");
        } catch (error) {
            alert("Invalid Credentials");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

// Logout Component
const Logout = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

// Named exports
export { Login, Logout };
