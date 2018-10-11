import React, {Component, Fragment} from 'react';

class Client extends Component {
	render() {
		return (
			<Fragment>
				<div className="breadcrumb text-center support-breadcrumb"></div>
				<div className="main-content">
					<div className="container">
						<p><b>Hỗ trợ khách hàng</b></p>
						<p>Chúng tôi có thể giúp gì cho bạn?</p>
						<p>Bộ phận hỗ trợ của MobiFone sẽ giải đáp mọi thắc mắc 24/24 các vấn đề liên quan đến điện thoại iPhone của bạn.</p>
						<p>Gọi <b>9090</b> (Thuê bao trả sau: Miễn phí, Thuê bao trả trước: 200 đồng/phút) | <b>18001090</b> (Miễn phí).</p>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Client;