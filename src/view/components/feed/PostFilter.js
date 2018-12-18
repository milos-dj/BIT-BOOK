import React from 'react';

import './css/PostFilter.css';

const PostFilter = ({ changeHandler }) => (
    <select className="form-control mt-2 filter" onChange={changeHandler} >
        <option value="all">All posts</option>
        <option value="text">Text posts</option>
        <option value="image">Image posts</option>
        <option value="video">Video posts</option>
    </select>
)
export default PostFilter;
