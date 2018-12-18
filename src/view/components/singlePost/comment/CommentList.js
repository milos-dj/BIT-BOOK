import React, { Component } from 'react';

import { postService } from '../../../../services/postService';
import { userService } from '../../../../services/userService';

import CommentItem from './CommentItem';
import CommentInput from './CommentInput';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            users: [],
            commentUsers: [],
            isFirstComment: true
        }
        this.loadComments = this.loadComments.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
    }

    loadComments() {
        return postService.fetchComments(this.props.postId)
            .then((comments) => {
                this.setState({
                    comments
                })
            })
    }
    loadUsers() {
        return userService.fetchUsers()
            .then((users) => {
                this.setState({
                    users
                })
            })
    }

    componentDidMount() {
        this.loadComments();
        this.loadUsers();

    }
    render() {
        if (!this.state.comments.length) {
            return (
                <>
                    <CommentInput postId={this.props.postId} loadComments={this.loadComments} />
                    <p className="mt-3 ml-auto mr-auto"> There are no comments...</p>
                </>
            )
        }
        const commentItem = this.state.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} users={this.state.users} />
        })
        return (
            <>
                <CommentInput postId={this.props.postId} loadComments={this.loadComments} />
                {commentItem}
            </>
        )
    }
}
export default CommentList;
