import React, {Component} from 'react';

class IphoneXS extends Component {
	render() {
		return (
			<section className="section-hero">
				<div className="container">
					<div className="hero-lockup">
						<video src="lib/images/7c96e9f2-254a-4048-a497-69d7753a8313.mp4" muted playsInline autoPlay></video>
					</div>
					<div className="copy text-center">
						<div className="logotype">
							<img src="lib/images/iphonexs_logo_large.png" alt="" className="img-responsive center-block"/>
						</div>
						<p className="tagline">Màn hình lớn hơn<br/> phiên bản trước</p>
						<p className="intro">
							Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID.
							The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system.
							iPhone XS is everything you love about iPhone. Taken to the extreme.
						</p>
					</div>
				</div>
			</section>
		)
	}
}

export default IphoneXS;