import React, { Component } from 'react';
import { postService } from '../../../../services/postService';

class CommentInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changeInput: '',
            isDisabled: true,
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.postComment = this.postComment.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    handlerChange(event) {
        const disabled = event.target.value ? false : true;
        this.setState({
            changeInput: event.target.value,
            isDisabled: disabled
        })
    }
    postComment() {
        const inputData = {
            'body': this.state.changeInput,
            'postId': this.props.postId,
        }
        postService.postComment('comments', inputData)
            .then((response) => {
                if (response) {
                    this.props.loadComments();
                }
            })

        this.setState({
            changeInput: ''
        })
    }
    onKeyPress(event) {
        if (event.key === 'Enter') {
            this.postComment();
        }
    }
    render() {
        return (
            <div className="m-auto row">
                <input type="text" onChange={this.handlerChange} value={this.state.changeInput} className="form-control col-10 mt-2" placeholder="Add your comment" onKeyPress={this.onKeyPress} />
                <button type="button" onClick={this.postComment} className="btn btn-primary col-2 mt-2 pl-2" disabled={this.state.isDisabled}>Send</button>
            </div>
        )
    }

}
export default CommentInput;
