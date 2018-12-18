import React from 'react';

import './css/SearchNoResults.css';

const NoResults = () => {
    return (
        <main className="container">
            <h4 className="no-results">
                <i className="mb-2 fa fa-meh-o fa-4x" aria-hidden="true"></i>
                <p>We couldnt find any people matching your search</p>
            </h4>
        </main>
    )
}
export default NoResults;
