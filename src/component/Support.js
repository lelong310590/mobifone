import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Support extends Component {
	render() {
		return (
			<Fragment>
				<div className="breadcrumb text-center support-breadcrumb"></div>
				<div className="main-content">
					<div className="container">
						<div className="support-navigation">
							<li><Link to={'/client'}>Hỗ trợ khách hàng</Link></li>
							<li><Link to={'/guide'}>Hướng dẫn sử dụng iPhone</Link></li>
							<li><Link to={'/policy'}>Chính sách bảo hành</Link></li>
							<li><a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">Trang chủ Apple</a></li>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Support;