import React, { Component } from 'react';

import { postService } from '../../../../services/postService'
import { validateService } from '../../../../services/validationService';

class NewVideoModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: "",
            validInput: true,
            error: false
        }
        this.changeInput = this.changeInput.bind(this);
        this.collectVideoInput = this.collectVideoInput.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    changeInput(event) {
        this.setState({
            inputValue: event.target.value
        })

        const valid = validateService.validateVideoPost(event.target.value);
        this.setState({
            validInput: !valid,
            error: !valid
        })


    }
    collectVideoInput() {
        const valid = validateService.validateVideoPost(this.state.inputValue);
        const type = 'VideoPosts';

        const inputData = {

            "videoUrl": valid,
            "dateCreated": new Date(),
            "userId": 0,
            "userDisplayName": "string",
            "type": "video"

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
                this.collectVideoInput();
            }
        }
    }
    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">New video post</h5>
                        <button type="button" className="close" onClick={this.props.closeModal} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input onKeyPress={this.onKeyPress} onChange={this.changeInput} value={this.state.inputValue} type="text" placeholder="Please enter YouTube link..." className="modal-input col-12 pl-1" />
                        {this.state.error ? <p className="text-danger mt-1">Please enter valid YouTube link.</p> : null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={this.collectVideoInput} disabled={this.state.validInput} className="btn btn-primary">POST</button>
                    </div>
                </div>
            </div>
        );
    };
}
export default NewVideoModal;
