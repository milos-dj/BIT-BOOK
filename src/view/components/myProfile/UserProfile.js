import React, { Component } from 'react';

import { userService } from '../../../services/userService';

import MyProfilePicAndName from './MyProfilePicAndName';
import MyProfileDesc from './MyProfileDesc';
import MyProfileCount from './MyProfileCount';

import './css/MyProfile.css'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            open: false
        }
    }
    componentDidMount() {
        const userId = this.props.match.params.userId;
        userService.fetchSingleUser(userId)
            .then(((user) => {
                this.setState({ user })
            }))
    }
    render() {
        if (!this.state.user) { return null }
        const { user } = this.state;
        return (
            <>
                <MyProfilePicAndName name={user.name} img={user.img} />
                <MyProfileDesc about={user.about} aboutShort={user.aboutShort} />
                <MyProfileCount commentsCount={user.commentsCount} postsCount={user.postsCount} />
            </>
        )
    }
}
export default UserProfile;
