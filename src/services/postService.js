import Post from '../models/Post';
import Comment from '../models/Comment';

import { apiService } from './apiService';

class PostService {
    fetchPosts() {
        return apiService.get('posts')
            .then((postObj) => postObj.map((post) => {
                const { videoUrl, text, imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = post;
                let content;
                if (videoUrl) {
                    content = videoUrl;
                }
                if (text) {
                    content = text;
                }
                if (imageUrl) {
                    content = imageUrl;
                }
                return new Post(content, id, dateCreated, userId, userDisplayName, type, commentsNum);
            }))
    };
    fetchSinglePost(type, postId) {
        return apiService.get(`${type}/${postId}`)
            .then((postObj) => {
                const { videoUrl, text, imageUrl, id, dateCreated, userId, userDisplayName, type, commentsNum } = postObj;
                let content;
                if (videoUrl) {
                    content = videoUrl;
                }
                if (text) {
                    content = text;
                }
                if (imageUrl) {
                    content = imageUrl;
                }
                return new Post(content, id, dateCreated, userId, userDisplayName, type, commentsNum);
            })
    }
    fetchComments(postId) {
        return apiService.get(`comments?postId=${postId}`)
            .then((commentObj) => {
                return commentObj.map((comment) => {
                    const { id, dateCreated, body, postId, authorName, authorId } = comment;
                    return new Comment(id, dateCreated, body, postId, authorName, authorId);
                })
            })
    }
    postData(queryString, inputData) {
        return apiService.post(queryString, inputData);
    }
    postComment(queryString, inputData) {
        return apiService.post(queryString, inputData);
    }
    postDelete(queryString, inputData) {
        return apiService.delete(queryString, inputData);
    }
}
export const postService = new PostService();
