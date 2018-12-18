import React from 'react';

import WelcomeAbout from './WelcomeAbout';
import WelcomeList from './WelcomeList';

import './css/WelcomePage.css'

const WelcomePage = () => {
    return (
        <>
            <div className="row">
                <WelcomeAbout />
                <WelcomeList />
            </div>
        </>
    )
}
export default WelcomePage;
