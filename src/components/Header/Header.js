import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <Link to='home'>Home</Link>
                <Link to='orderreview'>Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;