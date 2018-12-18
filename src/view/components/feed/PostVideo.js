import React from 'react';
import { Link } from 'react-router-dom';

import PostCountComment from "./PostCountComment";
import PostDelete from "./PostDelete";

const PostVideo = ({ post, deletePost, userId }) => {
  let stop = null;
  if (window.location.href.includes('/post/')) {
    stop = e => e.preventDefault()
  }
  if (post.content.indexOf("youtube") === -1) {
    return null;
  }
  return (
    <div className="card container pt-2 mt-2 mb-2">
      {parseInt(userId) === post.userId
        ? <div className="card-body p-0 m-2">
          <PostDelete deletePost={deletePost} />
        </div>
        : <div></div>
      }
      <Link to={`post/videoposts/${post.id}`} onClick={stop}>
        <div className="card-body p-0 m-2">
          <div className="embed-responsive embed-responsive-16by9 mb-3">
            <iframe title="video" className="embed-responsive-item" allowFullScreen
              src={post.content}
            />
          </div>
          <PostCountComment postType={post.type} numComment={post.commentsNum} />
        </div>
      </Link>
    </div>
  );
};
export default PostVideo;
