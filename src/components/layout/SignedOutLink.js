import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
    return (
        <nav className='nav-wrapper grey darken-3'>
            <ul className="right">
                 <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>

            </ul>

        </nav>
    );
}

export default SignedOutLink