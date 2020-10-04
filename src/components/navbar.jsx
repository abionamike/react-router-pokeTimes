import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// the NavLink tag adds a a class of active to the current link which can be used to style the current link
//  the Link tag doesn't any class to it

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Poke's Times</Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li> 
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;