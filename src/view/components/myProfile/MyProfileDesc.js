import React from 'react';

import './css/MyProfile.css'

const MyProfileDesc = ({ about }) => {
    return (
        <div className="profile-desc">
            <h3>- About -</h3>
            <p className="card-text text-center p-4">
                {`${about}`}
            </p>
        </div>
    )
}

export default MyProfileDesc;
