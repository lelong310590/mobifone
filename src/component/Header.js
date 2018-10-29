import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Header extends Component {

	render() {
		return(
				<header className="header" id="header">
					<div className="container">
						<div className="main-logo">
							<Link to={'/'}>
								<img src="lib/images/logo.png" alt="" className="img-responsive"/>
							</Link>
						</div>
					</div>
					<div className="main-navigation">
						<div className="container">
							<ul>
								<li><Link to={'/'}>iPhone</Link></li>
								<li><Link to={'/package'}>Gói cước</Link></li>
								<li><Link to={'/area'}>Điểm giao dịch</Link></li>
								<li><Link to={'/support'}>Hỗ trợ</Link></li>
							</ul>
						</div>
					</div>
				</header>
		)
	}
}

export default Header;