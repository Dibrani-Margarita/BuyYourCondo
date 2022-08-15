import React from "react";
import { NavLink } from "react-router-dom";
import './style/Header.css';

const Header = () => {
    return (
    <header className="header">
        <div className="container">
            <div className="title">
                <span>Condo App</span>
            </div>
            <div className="nav-bar">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/condos">All condos</NavLink>
                <NavLink className="nav-link" to="/new">New</NavLink>
            </div>
        </div>
        
    </header>
    );
};

export default Header;
