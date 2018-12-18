import React from 'react';

import PostImage from './PostImage';
import PostText from './PostText';
import PostVideo from './PostVideo';

import { postService } from '../../../services/postService';

const PostItem = ({ post, userId, loadPosts }) => {
    const { type } = post
    const deletePost = () => {
        postService
            .postDelete(`posts/${post.id}`)
            .then((response) => {
                if (response.status === 200) {
                    loadPosts()
                }
            })
    }
    if (!userId) { return null }

    let listItem;
    if (type === "text") {
        listItem = <PostText post={post} deletePost={deletePost} userId={userId} />
    }
    if (type === "image") {
        listItem = <PostImage post={post} deletePost={deletePost} userId={userId} />
    }
    if (type === "video") {
        listItem = <PostVideo post={post} deletePost={deletePost} userId={userId} />
    }
    return (
        <>
            {listItem}
        </>
    )
}
export default PostItem;
