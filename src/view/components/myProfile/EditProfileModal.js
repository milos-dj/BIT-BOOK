import React, { Component } from 'react';

import { userService } from '../../../services/userService';

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInputValue: this.props.user.name,
            descInputValue: this.props.user.about,
            currentImg: this.props.user.img,
            file: ''
        }
        this.changeNameInput = this.changeNameInput.bind(this);
        this.changeDescInput = this.changeDescInput.bind(this);
        this.changeImgInput = this.changeImgInput.bind(this);
        this.uploadPicture = this.uploadPicture.bind(this);
        this.editUserProfile = this.editUserProfile.bind(this);
        this.editUserHandler = this.editUserHandler.bind(this);
    }

    changeNameInput(event) {
        this.setState({
            nameInputValue: event.target.value,
        })
    }
    changeDescInput(event) {
        this.setState({
            descInputValue: event.target.value,
        })
    }
    changeImgInput(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                currentImg: reader.result,
                file
            })
        };
        reader.readAsDataURL(file);
    }
    uploadPicture() {
        userService.uploadUserImage(this.state.file)
            .then((response) => {
                return response.json();
            })
            .then((link) => {
                this.editUserProfile(link);
            })
    }
    editUserProfile(link = this.state.currentImg) {
        const inputData = {
            "userId": this.props.user.id,
            "name": this.state.nameInputValue,
            "aboutShort": this.state.descInputValue || 'about',
            "about": this.state.descInputValue || 'about',
            "avatarUrl": link,
            "email": this.props.user.email
        }
        userService.editUserProfile(inputData)
            .then(() => {
                this.props.closeModal();
                this.props.fetchData();
            })
    }
    editUserHandler() {
        this.state.file ? this.uploadPicture() : this.editUserProfile()
    }
    render() {
        return (
            <div className="" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Update profile</h5>
                        </div>
                        <div className="modal-body row">
                            <div className="col-4">
                                <img className="col-12 p-0 mt-2" src={this.state.currentImg} alt="Card cap" />
                                <label className="btn btn-primary col-12">
                                    <input type="file" onChange={this.changeImgInput} /> UPLOAD PHOTO
                                </label>
                            </div>
                            <div className="col-8">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" id="#inputName" className="form-control"
                                    value={this.state.nameInputValue}
                                    onChange={this.changeNameInput} />
                                <label htmlFor="exampleFormControlTextarea1" className="mt-4">User description</label>
                                <textarea className="form-control" rows="6"
                                    onChange={this.changeDescInput}
                                    value={this.state.descInputValue} >
                                </textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.editUserHandler} className="btn btn-primary">UPDATE</button>
                            <button type="button" onClick={this.props.closeModal} className="btn btn-secondary">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditProfileModal;
