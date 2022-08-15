import React from "react";
import { NavLink } from "react-router-dom";
import './style/Header.css';

const Header = () => {
    return (
    <header className="header">
        <h1>Condo App</h1>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/condos">All condos</NavLink>
        <NavLink className="nav-link" to="/new">New</NavLink>
    </header>
    );
};

export default Header;
