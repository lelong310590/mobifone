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
						url={'https://www.apple.com/105/media/us/iphone-xs/2018/674b340a-40f1-4156-bbea-00f386459d3c/films/design/iphone-xs-design-tpl-cc-us-2018_1280x720h.mp4'}
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

				<section className="section-display section-material">
					<div className="container">
						<div className="texture-1">
							<h2 className="inline">Vật liệu đặc biệt.</h2>
							<p>Kính bền nhất từng có trong điện thoại thông minh. Một kết thúc vàng mới đẹp, đạt được với một quá trình cấp nguyên tử. Dây đeo bằng thép không gỉ được gia công chính xác, bằng phẫu thuật. Và mức độ chống nước và bụi mới.</p>
						</div>
						<div className="material-block">
							<div className="material-text material-text-left">
								<div className="material-text-item text-left">
									<b>Thép không gỉ phẫu thuật.</b><br/>
									Chúng tôi sử dụng một hợp kim được thiết kế đặc biệt của Apple được gia công chính xác để tạo ra các dải cấu trúc trong ba kết thúc.
								</div>
								<div className="material-text-item text-left">
									<b>PVD màu quá trình.</b> Vàng và không gian màu xám kết thúc một quá trình lắng đọng hơi vật lý tiên tiến trên các dải thép không gỉ cho màu sắc và phản xạ bổ sung đẹp mắt cho thủy tinh.
								</div>
							</div>
							<div className="material-image">
								<div className="material-image-content"></div>
							</div>
							<div className="material-text">
								<div className="material-text-item text-left">
									<b>Sạc không dây.</b> Kính trở lại cho phép iPhone XS sạc không dây.3 Và nó sạc nhanh hơn iPhone X
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-display">
					<div className="container">
						<div className="texture-1">
							<h2 className="inline">ID khuôn mặt nâng cao.</h2>
							<p>Bảo mật rất đơn giản khi khuôn mặt của bạn là mật khẩu của bạn. Bạn có thể mở khóa iPhone, đăng nhập bằng ứng dụng và trả tiền cho mọi thứ chỉ trong nháy mắt. Đó là khuôn mặt an toàn nhất từng có trong điện thoại thông minh. Và bây giờ nó còn nhanh hơn nữa.</p>
						</div>
						<div className="faceid-block">
							<div className="faceid-device center-block">
								<video src="lib/images/e70ed99f-d8c6-44f8-8736-98b574f4faf7.mp4" muted playsInline
								       autoPlay></video>
								<img src="lib/images/hardware_faceid_gold_portrait_large.png" alt="" className="img-responsive faceid-device-blank"/>
							</div>
						</div>
					</div>
				</section>

				<section className="section-display">
					<div className="container">
						<div className="texture-1">
							<h2 className="inline">Và cái này.</h2>
							<p>iPhone XS cung cấp LTE Gigabit cho tốc độ tải xuống siêu nhanh.5 Và dung lượng lưu trữ lên đến 512GB, làm cho chiếc iPhone có dung lượng cao nhất của chúng tôi.</p>
						</div>
						<div className="lte-block">
							<img src="lib/images/gigabit_lte_large.jpg" alt="" className="img-responsive pull-right"/>
						</div>
					</div>
				</section>

				<section className="section-display">
					<div className="container">
						<div className="texture-1">
							<h2 className="inline">Không có điện thoại nào khác giống như iPhone. </h2>
							<p>Mọi quyết định đi vào iPhone làm cho nó nổi bật. Từ cách nó được thực hiện, theo cách chúng ta xây dựng trong sự riêng tư và bảo mật ngay từ đầu, đến những cách sáng tạo chúng tôi tái chế các thành phần của nó.</p>
						</div>
					</div>
				</section>
			</Fragment>
		)
	}
}

export default IphoneXS;