import React, { Component } from 'react';
import { userService } from '../../../services/userService';

import history from '../../../shared/history.js';


class WelcomeLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            error: ''
        }
        this.changeUsernameInput = this.changeUsernameInput.bind(this);
        this.changePasswordInput = this.changePasswordInput.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }
    changeUsernameInput(event) {
        this.setState({
            usernameInput: event.target.value
        })
    }
    changePasswordInput(event) {
        this.setState({
            passwordInput: event.target.value
        })
    }
    loginUser() {
        const inputData = {
            'username': this.state.usernameInput,
            'password': this.state.passwordInput
        }
        userService.loginUser(inputData)
            .then((response) => {
                if (response.sessionId) {
                    sessionStorage.setItem('sessionId', response.sessionId);
                    this.setState({
                        error: ''
                    })
                    history.push('/feed');
                    history.go()
                }
                else {
                    this.setState({
                        error: response.error.message
                    })
                }
            })
    }
    onKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.loginUser();
        }
    }
    render() {
        const isActive = this.props.isActive ? 'active' : '';
        return (
            <div className={`tab-pane fade show ${isActive}`} id="" role="tabpanel" aria-labelledby="nav-home-tab" >
                <div className="row">
                    <form className="col-12 mt-1">
                        <div className="form-group">
                            <input type="text" className="form-control mt-3" placeholder="Username: demo"
                                onChange={this.changeUsernameInput}
                                value={this.state.usernameInput}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password: demo1234"
                                onChange={this.changePasswordInput}
                                value={this.state.passwordInput}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <p className="text-danger">{this.state.error}</p>
                        <button onClick={this.loginUser} type="button" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div >
        )
    }
}
export default WelcomeLogin;
