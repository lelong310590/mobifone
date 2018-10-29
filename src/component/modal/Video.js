import React, {Component} from 'react';

class Video extends Component {

	closeModal = (status) => {
		this.props.closeModal(status);
	}

	render() {
		return (
			<div className="video-modal-wrapper">
				<a onClick={() => this.closeModal(false)} className="close-modal"><i className="fas fa-times"></i></a>
				<video src={this.props.url} playsInline
				       autoPlay controls></video>
			</div>
		);
	}
}

export default Video;