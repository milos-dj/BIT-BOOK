import React, { Component } from 'react';

import buttonAnimation from './../../../../shared/buttonAnimation'
import ModalFeed from './ModalFeed';

import './NewPostButton.css'

class NewPostButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            modalType: ""
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.onClickModal = this.onClickModal.bind(this)
    }

    openModal(type) {
        this.setState({
            open: true,
            modalType: type
        })
    }
    closeModal() {
        this.setState({
            open: false
        })
    }
    onClickModal(type) {
        return () => {
            this.openModal(type);
        }
    }
    componentDidMount() {
        buttonAnimation();
    }
    render() {
        return (
            <>
                <div className="backdrop"></div>
                <div className="fab child red" data-subitem="1"
                    onClick={this.onClickModal('video')}
                >
                    <span className="buttonText"><i className="fa fa-file-video-o"></i></span>
                </div>
                <div className="fab child green" data-subitem="2"
                    onClick={this.onClickModal('image')} >
                    <span className="buttonText"><i className="fa fa-file-image-o "></i></span>
                </div>
                <div className="fab child blue" data-subitem="3"
                    onClick={this.onClickModal('text')} >
                    <span className="buttonText"><i className="fa fa-file-text"></i></span>
                </div>
                <div className="fab blue" id="masterfab"><span>+</span></div>

                <ModalFeed
                    open={this.state.open}
                    closeModal={this.closeModal}
                    type={this.state.modalType}
                    loadPosts={this.props.loadPosts}
                />
            </ >
        )
    }
}
export default NewPostButton;
