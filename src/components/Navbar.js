import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./NavBar.scss";

const Navbar = () => {
    return (
        <div className="bg-danger nav-wrapper">
            <nav className="container d-flex justify-content-between">
                <Link to="/" className="navbar-brand py-4 text-white">Poke' Times</Link>
                <ul className="list-unstyled d-flex align-items-stretch m-0">
                    <li><NavLink to="/about" className="nav-link" activeClassName="selected"><span className="nav-link-text">About</span></NavLink></li>
                    <li><NavLink to="/contact" className="nav-link" activeClassName="selected"><span className="nav-link-text">Contact</span></NavLink></li>
                    <li><NavLink exact to="/" className="nav-link" activeClassName="selected"><span className="nav-link-text">Home</span></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
