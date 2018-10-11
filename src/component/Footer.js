import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

class Footer extends Component {
	render() {
		return(
			<Fragment>
				<footer className="footer" id="footer">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-md-3 footer-col text-center">
								<img src="lib/images/icon_dark_large.svg" alt="" className="img-responsive center-block footer-icon"/>
								<h4 className="footer-title">Áp dụng cho tất cả khách hàng</h4>
								<Link to={'/support'}>Xem thêm</Link>
							</div>

							<div className="col-xs-12 col-md-3 footer-col text-center">
								<img src="lib/images/icon_pick_up.svg" alt="" className="img-responsive center-block footer-icon"/>
								<h4 className="footer-title">Mua iPhone tại điểm bán hàng gần nhất</h4>
								<Link to={'/area'}>Địa điểm</Link>
							</div>

							<div className="col-xs-12 col-md-3 footer-col text-center">
								<img src="lib/images/icon_help.svg" alt="" className="img-responsive center-block footer-icon"/>
								<h4 className="footer-title">Gửi ticket hỗ trợ cho chúng tôi hoặc gọi hotline: 18001090</h4>
								<Link to={'/support'}>Xem thêm</Link>
							</div>

							<div className="col-xs-12 col-md-3 footer-col text-center">
								<img src="lib/images/store.svg" alt="" className="img-responsive center-block footer-icon"/>
								<h4 className="footer-title">Truy cập kho ứng dụng Apple Store</h4>
								<Link to={'http://www.apple.com/itunes/'}>Apple Store</Link>
							</div>
						</div>
					</div>
				</footer>

				<div className="copyright text-center">
					<img src="lib/images/logo.png" alt="" className="img-responsive center-block"/>
					<p>Bản quyền thuộc về Mobifone © {moment().format('YYYY')}</p>
				</div>
			</Fragment>
		)
	}
}

export default Footer;