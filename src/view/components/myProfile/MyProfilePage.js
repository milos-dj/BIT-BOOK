import React, { Component } from 'react';
import { userService } from '../../../services/userService';

import Modal from './Modal';
import MyProfilePicAndName from './MyProfilePicAndName';
import MyProfileDesc from './MyProfileDesc';
import MyProfileCount from './MyProfileCount';
import EditProfileButton from './EditProfileButton';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            open: false
        }
        this.fetchData = this.fetchData.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        userService.fetchMyProfile()
            .then(((user) => {
                this.setState({ user })
            }))
    }
    openModal() {
        this.setState({
            open: true
        })
    }
    closeModal() {
        this.setState({
            open: false
        })
    }
    render() {
        if (!this.state.user) { return null }
        const { user } = this.state;
        return (
            <>
                <Modal
                    open={this.state.open}
                    closeModal={this.closeModal}
                    user={this.state.user}
                    fetchData={this.fetchData}
                />
                <EditProfileButton openModal={this.openModal} />

                <MyProfilePicAndName
                    name={user.name}
                    img={user.img}
                />
                <MyProfileDesc about={user.about} />
                <MyProfileCount
                    commentsCount={user.commentsCount}
                    postsCount={user.postsCount}
                />
            </>
        )
    }
}
export default MyProfile;
