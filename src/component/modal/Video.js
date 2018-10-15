import React, {Component} from 'react';

class Video extends Component {

	closeModal = (status) => {
		this.props.closeModal(status);
	}

	render() {
		return (
			<div className="video-modal-wrapper">
				<a onClick={() => this.closeModal(false)} className="close-modal"><i className="fas fa-times"></i></a>
				<video src="https://www.apple.com/105/media/us/iphone-xs/2018/674b340a-40f1-4156-bbea-00f386459d3c/films/design/iphone-xs-design-tpl-cc-us-2018_1280x720h.mp4" playsInline
				       autoPlay controls></video>
			</div>
		);
	}
}

export default Video;