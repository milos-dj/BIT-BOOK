import React from 'react';

import './css/PostCountComment.css';

const PostCountComment = ({ postType, numComment }) => {
    return (
        <>
            <p className="float-left post-type">{`${postType} post`}</p>
            <p className="float-right "><i className="fa fa-comments mr-1" aria-hidden="true"></i>
                <span className="counter-message">{numComment}</span>
            </p>
        </>

    )
}
export default PostCountComment;
