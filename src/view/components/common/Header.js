import React from 'react';
import { Link } from 'react-router-dom';

import './css/Header.css'

const Header = () => {
    const logout = () => {
        sessionStorage.removeItem('sessionId');
    }
    return (
        <header className="nav">
            <div className="container">
                <div className="nav-logo">
                    <Link to="/"><img src="https://i.imgur.com/6DlUpLk.png" alt="logo" /></Link>
                </div>
                {sessionStorage.getItem('sessionId')
                    ? <div className="nav-ul">
                        <ul>
                            <li onClick={logout}><Link to="/"><i className="fa fa-sign-out" aria-hidden="true"></i><span className="nav-icon">Logout</span></Link></li>
                            <li><Link to="/myprofile"><i className="fa fa-user"></i><span className="nav-icon">Profile</span></Link></li>
                            <li><Link to="/people"><i className="fa fa-users"></i><span className="nav-icon">People</span></Link></li>
                            <li><Link to="/feed"><i className="fa fa-rss"></i><span className="nav-icon">Feed</span></Link></li>
                        </ul>
                    </div>
                    : null}
            </div>
        </header>
    )
}
export default Header;
