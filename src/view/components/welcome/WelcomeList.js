import React, { Component } from 'react';

import WelcomeLogin from './WelcomeLogin'
import WelcomeRegister from './WelcomeRegister'

class WelcomeList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loginActive: true,
            registerActive: false,
            message: '',
        }
        this.loginBtn = this.loginBtn.bind(this);
        this.registerBtn = this.registerBtn.bind(this);
        this.successRegister = this.successRegister.bind(this);
    }

    loginBtn() {
        this.setState({
            loginActive: true,
            registerActive: false
        })
    }
    registerBtn() {
        this.setState({
            loginActive: false,
            registerActive: true
        })
    }
    successRegister() {
        this.setState({
            message: 'You are successfully registration, please log in now'
        })
    }
    render() {
        const isActiveLogin = this.state.loginActive ? 'active' : '';
        const isActiveRegister = this.state.registerActive ? 'active' : '';
        const isSuccess = !this.state.message ? 'd-none' : '';
        return (
            <div className="col-5">
                <div className={`alert alert-success ${isSuccess}`} role="alert">
                    {this.state.message}
                </div>
                <nav>
                    <div className="nav nav-tabs nav-login" id="nav-tab" role="tablist">
                        <button onClick={this.loginBtn} className={`nav-item nav-link ${isActiveLogin}`} id="nav-home-tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Login</button>
                        <button onClick={this.registerBtn} className={`nav-item nav-link ${isActiveRegister}`} id="nav-profile-tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Register</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <WelcomeLogin isActive={this.state.loginActive} />
                    <WelcomeRegister isActive={this.state.registerActive} loginBtn={this.loginBtn} successRegister={this.successRegister} />
                </div>

            </div>
        )
    }
}
export default WelcomeList;
