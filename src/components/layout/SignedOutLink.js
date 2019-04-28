import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
    return (
        <nav className='nav-wrapper grey darken-3'>
            <ul className="right">
                 <li><NavLink to='/'>SignUp</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
           
            </ul>

        </nav>
    );
}

export default SignedOutLink