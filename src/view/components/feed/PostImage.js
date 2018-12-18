import React from 'react';
import { Link } from 'react-router-dom';

import PostCountComment from "./PostCountComment";
import PostDelete from "./PostDelete";

const PostImage = ({ post, deletePost, userId }) => {
  let stop = null;
  if (window.location.href.includes('/post/')) {
    stop = e => e.preventDefault()
  }
  return (
    <div className="card container pt-2 mt-2 mb-2">
      {parseInt(userId) === post.userId
        ? <div className="card-body p-0 m-2">
          <PostDelete deletePost={deletePost} />
        </div>
        : <div></div>
      }
      <Link to={`post/imageposts/${post.id}`} onClick={stop}>
        <div className="card-body p-0 m-2">
          <img className="card-img mb-3" alt="Card cap" src={post.content} />
          <PostCountComment postType={post.type} numComment={post.commentsNum} />
        </div>
      </Link>
    </div>
  );
};
export default PostImage;
