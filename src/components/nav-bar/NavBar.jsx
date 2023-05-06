import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/photos">Photos</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;