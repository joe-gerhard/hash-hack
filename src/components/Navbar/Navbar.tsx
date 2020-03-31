import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/search">Search</Link>
            <Link to="/input">Input</Link>
        </div>
    )
}

export default Navbar;
