import React from 'react';

const MyProfileCount = ({ commentsCount, postsCount }) => {
    return (
        <div className="row mt-4">
            <div className="w-50 col-5 m-auto text-center" >
                <button type="button" className="btn btn-primary mr-5">
                    Posts <span className="badge badge-light ml-2">{postsCount}</span>
                </button>
                <button type="button" className="btn btn-primary">
                    Comments <span className="badge badge-light ml-2">{commentsCount}</span>
                </button>
            </div>
        </div>
    )
}
export default MyProfileCount;
