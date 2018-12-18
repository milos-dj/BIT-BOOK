import React from 'react';

import './css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <span>{new Date().getFullYear()} © Copyright TIM<sup>2</sup></span>
            </div>
        </footer>
    );
}
export default Footer
