import React, {Component, Fragment} from 'react';

class Guide extends Component {
	render() {
		return (
			<Fragment>
				<div className="breadcrumb text-center support-breadcrumb"></div>
				<div className="main-content">
					<div className="container">
						<p><b>Hướng dẫn sử dụng iPhone</b></p>
						<p><b>Tiếng Việt: </b> <a href="http://help.apple.com/iphone/9/?lang=vi" target="_blank" rel="noopener noreferrer">http://help.apple.com/iphone/9/?lang=vi</a></p>
						<p><b>Tiếng Anh: </b> <a href="http://help.apple.com/iphone/9/?lang=vi" target="_blank" rel="noopener noreferrer">http://help.apple.com/iphone/9/?lang=vi</a></p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Guide;