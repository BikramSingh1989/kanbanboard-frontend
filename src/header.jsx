import React from "react";

function Header() {
    const handleLogin = () => {
        alert("Login Clicked!");
    };

    const handleNewTicket = () => {
        alert("New Ticket Clicked!");
    };

    return (
        <header>
            <h1 className="logo">Krazy Kanban Board</h1>
            <div className="header-buttons">
                <button className="btn" onClick={handleLogin}>Login</button>
                <button className="btn" onClick={handleNewTicket}>New Ticket</button>
            </div>
        </header>
    );
}

export default Header;
