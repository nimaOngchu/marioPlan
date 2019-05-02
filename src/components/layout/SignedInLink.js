import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLink = () => {
    return (
        <nav className='nav-wrapper grey darken-3'>
            <ul className="right">
                 <li><NavLink to='/create'>New Projects</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className = 'btn btn-floating pink lighten-1'>NP</NavLink></li>
            </ul>

        </nav>
    );
}

export default SignedInLink