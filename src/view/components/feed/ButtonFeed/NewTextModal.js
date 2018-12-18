import React, { Component } from 'react';

import { postService } from '../../../../services/postService'
import { validateService } from '../../../../services/validationService';

class NewTextModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: "",
            validInput: true,
            error: false
        }
        this.changeInput = this.changeInput.bind(this);
        this.collectTextInput = this.collectTextInput.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    changeInput(event) {
        this.setState({
            inputValue: event.target.value,

        })
        const valid = validateService.validateTextPost(event.target.value.trim());
        this.setState({
            validInput: !valid,
            error: !valid
        })
    }
    collectTextInput() {
        const inputVal = this.state.inputValue;
        const type = 'TextPosts';

        const inputData = {
            "text": inputVal,
            "dateCreated": new Date(),
            "userId": 0,
            "userDisplayName": "string",
            "type": "text"
        }

        postService.postData(type, inputData)
            .then((response) => {
                if (response === true) {
                    this.props.closeModal();
                    this.props.loadPosts();
                }
            })
    }
    onKeyPress(event) {
        if (event.key === 'Enter') {
            if (!this.state.validInput) {
                this.collectTextInput();
            }
        }
    }
    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">New text post</h5>
                        <button type="button" className="close" onClick={this.props.closeModal} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <textarea onKeyPress={this.onKeyPress} onChange={this.changeInput} value={this.state.inputValue} type="text" placeholder="Please enter text..." className="modal-input-text col-12 pl-1" ></textarea>
                        {this.state.error ? <p className="text-danger mt-1">Text can't include special characters.</p> : null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={this.collectTextInput} disabled={this.state.validInput} className="btn btn-primary">POST</button>
                    </div>
                </div>
            </div>
        );
    };
}
export default NewTextModal;
