import React, { Component } from 'react';

import { userService } from '../../../services/userService';
import { validateService } from '../../../services/validationService';

class WelcomeRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            userNameInput: '',
            emailInput: '',
            passwordInput: '',
            errorName: false,
            errorUserName: false,
            errorEmail: false,
            errorPassword: false,
            isNameValid: false,
            isUserValid: false,
            isEmailValid: false,
            isPassValid: false,
        }
        this.changeNameInput = this.changeNameInput.bind(this);
        this.changeUsernameInput = this.changeUsernameInput.bind(this);
        this.changeEmailInput = this.changeEmailInput.bind(this);
        this.changePasswordInput = this.changePasswordInput.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }
    changeNameInput(event) {
        const valid = validateService.validateRegister(event.target.value);
        this.setState({
            nameInput: event.target.value,
            errorName: valid,
            isNameValid: !valid
        })
    }
    changeUsernameInput(event) {
        const valid = validateService.validateRegister(event.target.value);
        this.setState({
            usernameInput: event.target.value,
            errorUserName: valid,
            isUserValid: !valid
        })
    }
    changeEmailInput(event){
        const valid = validateService.validateEmail(event.target.value);
        this.setState({
            emailInput: event.target.value,
            errorEmail: valid,
            isEmailValid: !valid
        })
    }
    changePasswordInput(event) {
        const valid = event.target.value.length > 6
        this.setState({
            passwordInput: event.target.value,
            errorPassword: valid,
            isPassValid: !valid
        })
    }
    registerUser(){
        const inputData = {
            'username': this.state.usernameInput,
            'password': this.state.passwordInput,
            'name': this.state.nameInput,
            'email': this.state.emailInput
        }
        userService.createUser(inputData)
            .then((response) => {
                if (response.sessionId) {
                    this.setState({ error: '' })
                    this.props.loginBtn();
                    this.props.successRegister();
                }
                else {
                    this.setState({ error: response.error.message })
                }
            })
    }
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            const { errorName, errorUserName, errorEmail, errorPassword } = this.state
            const isAllValid = (errorName && errorUserName && errorEmail && errorPassword) ? false : true;
            if (!isAllValid) {
                this.registerUser();
            }

        }
    }
    render() {
        const { errorName, errorUserName, errorEmail, errorPassword } = this.state
        const { isNameValid, isUserValid, isEmailValid, isPassValid } = this.state
        const isAllValid = (errorName && errorUserName && errorEmail && errorPassword) ? false : true

        const isActive = this.props.isActive ? 'active' : '';
        return (
            <div className={`tab-pane fade show  ${isActive}`} role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row">
                    <form className="col-12 mt-1" id="loginForm">
                        <div className="form-group">
                            <input type="text" className="form-control mt-3" id="registerName" placeholder="Enter Name"
                                value={this.state.nameInput}
                                onChange={this.changeNameInput}
                                onKeyPress={this.onKeyPress}
                            />
                            {isNameValid ? <p className="text-danger mt-1">Please enter valid name.</p> : null}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mt-3" id="registerUserName" placeholder="Enter Username"
                                value={this.state.usernameInput}
                                onChange={this.changeUsernameInput}
                                onKeyPress={this.onKeyPress}
                            />
                            {isUserValid ? <p className="text-danger mt-1">Please enter valid username.</p> : null}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mt-3" id="registerEmail" placeholder="Enter Email"
                                value={this.state.emailInput}
                                onChange={this.changeEmailInput}
                                onKeyPress={this.onKeyPress}
                            />
                            {isEmailValid ? <p className="text-danger mt-1">Please enter valid e-mail address.</p> : null}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="registerPassword" placeholder="Enter Password"
                                value={this.state.passwordInput}
                                onChange={this.changePasswordInput}
                                onKeyPress={this.onKeyPress}
                            />
                            {isPassValid ? <p className="text-danger mt-1">Please enter valid password (more then 6 characters).</p> : null}
                        </div>

                        <button type="button" onClick={this.registerUser} disabled={isAllValid} className="btn btn-primary" id="registerButton">Register</button>
                        <p className="text-danger">{this.state.error}</p>

                    </form>
                </div>
            </div>
        )
    }
}
export default WelcomeRegister;
