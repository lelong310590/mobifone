import React, {Component, Fragment} from 'react';
import Video from "../modal/Video";
import Display from "../parallax/Display";

class IphoneXS extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openModal: false,
		};
	}

	openModal = (status) => {
		this.setState({
			openModal: status
		})
	}

	render() {
		return (
			<Fragment>
				<section className="section-hero">
					<div className="container">
						<div className="hero-lockup">
							<video src="lib/images/7c96e9f2-254a-4048-a497-69d7753a8313.mp4" muted playsInline
							       autoPlay></video>
						</div>
						<div className="copy text-center">
							<div className="logotype">
								<img src="lib/images/iphonexs_logo_large.png" alt=""
								     className="img-responsive center-block"/>
							</div>
							<p className="tagline">Màn hình lớn hơn<br/> phiên bản trước</p>
							<p className="intro">
								Super Retina với hai kích cỡ - màn hình lớn nhất từng có trên iPhone. ID khuôn mặt nhanh
								hơn.
								Chip thông minh nhất, mạnh nhất trong điện thoại thông minh. Và một hệ thống camera hai
								bước đột phá.
								iPhone XS là mọi thứ bạn yêu thích về iPhone. Đưa đến cùng cực.
							</p>
						</div>
					</div>
				</section>

				<section className="section-design-film">
					<a className="block-link text-center" onClick={() => this.openModal(true)}>
						<div className="copy-wrapper">
							<h2 className="film-headline">iPhone thế hệ mới</h2>
							<p className="film-cta">Xem Video <i className="far fa-play-circle"></i></p>
						</div>
					</a>
				</section>

				{this.state.openModal &&
					<Video
						closeModal={this.openModal}
					/>
				}

				<section className="section-display">
					<div className="container">
						<div className="texture-1">
							<h2 className="inline">Super Retina. Màn hình lớn hơn.</h2>
							<p>Màn hình OLED tùy chỉnh trên iPhone XS mang lại màu sắc chính xác nhất trong ngành, HDR và màu đen thực. Và iPhone XS Max có màn hình lớn nhất từ trước tới nay trên iPhone.</p>
						</div>
						<div className="compare-display">
							<h2 className="text-center">Màn hình tạo nên sự khác biệt.</h2>
							<div className="compare-display-block">
								<div className="compare-display-text text-right">
									<p>iPhone XS Max</p>
									<span>6.5″</span>
								</div>
								<div className="compare-display-image">
									<img src="lib/images/iphonexs.png" alt="" className="img-responsive large-display"/>
									<img src="lib/images/iphonexs.png" alt="" className="img-responsive small-display"/>
								</div>
								<div className="compare-display-text">
									<p>iPhone XS Max</p>
									<span>5.8″</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-display">
					<div className="container">
						<div className="texture-1">
							<h2 className="inline">Vật liệu đặc biệt.</h2>
							<p>Kính bền nhất từng có trong điện thoại thông minh. Một kết thúc vàng mới đẹp, đạt được với một quá trình cấp nguyên tử. Dây đeo bằng thép không gỉ được gia công chính xác, bằng phẫu thuật. Và mức độ chống nước và bụi mới.</p>
						</div>
						<div classNa"material-block">

						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default IphoneXS;