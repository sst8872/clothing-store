import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/fbConfig";

import { ReactComponent as Logo } from "../../assets/crown.svg";


import './Header.scss';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className='logo-container' to="/">
                <Logo />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser
                        ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                        : <Link className="option" to='/signin' />
                }
            </div>
        </div>
    );
};

export default Header;