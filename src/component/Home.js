import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<Fragment>
				<section className="home-product bg-black text-center white-text">
					<div className="container">
						<img src="lib/images/iphonexs_logo_large.png" alt="" className="img-responsive center-block home-product-title"/>
						<h2 className="home-product-hero">Màn hình <br/> lớn hơn nữa.</h2>
						<div className="home-product-nav">
							<Link to={'/iphonexs'}>Tìm hiểu <i className="fas fa-angle-right"></i></Link>
							<Link to={'/package'}>Đặt mua <i className="fas fa-angle-right"></i></Link>
						</div>
						<img src="lib/images/hero-iphone-xs_large.jpg" alt="" className="img-responsive hero-image center-block"/>
					</div>
				</section>

				<section className="home-product bg-black text-center white-text section-iphonexr">
					<div className="container">
						<img src="lib/images/iphonexr_logo_large.png" alt="" className="img-responsive center-block home-product-title"/>
						<h2 className="home-product-hero">Rực rỡ sắc màu.</h2>
						<div className="home-product-nav">
							<Link to={'/iphonexr'}>Tìm hiểu <i className="fas fa-angle-right"></i></Link>
							<Link to={'/package'}>Đặt mua <i className="fas fa-angle-right"></i></Link>
						</div>
						<img src="lib/images/hero-iphone-xr_large.jpg" alt="" className="img-responsive hero-image center-block"/>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default Home;