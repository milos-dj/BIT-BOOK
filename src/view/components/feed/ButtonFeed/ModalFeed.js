import React from 'react';

import NewImageModal from './NewImageModal';
import NewTextModal from './NewTextModal';
import NewVideoModal from './NewVideoModal';

const ModalFeed = ({ closeModal, open, type, loadPosts }) => {
    const showHideClassName = open ? 'modal display-block' : 'modal display-none';
    let ChosenModal;
    switch (type) {
        case 'text':
            ChosenModal = <NewTextModal closeModal={closeModal} loadPosts={loadPosts} />;
            break;
        case 'image':
            ChosenModal = <NewImageModal closeModal={closeModal} loadPosts={loadPosts} />;
            break;
        case 'video':
            ChosenModal = <NewVideoModal closeModal={closeModal} loadPosts={loadPosts} />;
            break;
        default:
            break;
    }
    return (
        <div className={showHideClassName}>
            {ChosenModal}
        </div>
    )
}
export default ModalFeed;
