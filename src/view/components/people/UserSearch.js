import React, { Component } from 'react';

import './css/people.css'

class UserSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };
    }

    handleChange = ({ target }) => {
        const inputValue = target.value;
        this.setState({
            inputValue
        });
        this.props.onChangeSearch(inputValue);
    };
    render() {
        return (
            <div className="container input-group search-input mb-3 col-12 col-md-10 col-lg-8">
                <div className="input-group-prepend">
                    <span className="input-group-text search-icon" id="basic-addon1"><i className="fa fa-search"></i></span>
                </div>
                <input value={this.state.inputValue} onChange={this.handleChange} type="text" className="form-control" placeholder="Search users" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        );
    }
}
export default UserSearch;
