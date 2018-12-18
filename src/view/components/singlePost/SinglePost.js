import React, { Component } from 'react';
import { postService } from '../../../services/postService';

import history from '../../../shared/history.js';

import PostItem from '../feed/PostItem';
import CommentList from './comment/CommentList';

class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            userId: null
        }
        this.loadPosts = this.loadPosts.bind(this)
    }
    componentDidMount() {
        const type = this.props.match.params.type;
        const postId = this.props.match.params.postId;

        postService.fetchSinglePost(type, postId)
            .then((post) => {
                this.setState({ post })
            })
        this.setState({
            userId: localStorage.getItem("userId")
        })
    }
    loadPosts() {
        history.goBack()
    }
    render() {
        if (!this.state.post) { return null }
        if (!this.state.userId) { return null }

        return (
            <div className="col-8 offset-md-2">
                    <PostItem post={this.state.post} userId={this.state.userId} loadPosts={this.loadPosts} />
                    <CommentList postId={this.props.match.params.postId} />
            </div>
        )
    }
}
export default SinglePost;
