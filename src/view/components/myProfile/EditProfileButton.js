import React from 'react';

import './css/MyProfile.css'

const EditProfileButton = ({ openModal }) => {
    return (
        <div className="text-center mb-4">
            <button type="button" className="btn btn-primary col-2" onClick={openModal}>
                <i className="fa fa-cog mr-2" ></i>Edit Profile
            </button>
        </div>

    )
}
export default EditProfileButton;
