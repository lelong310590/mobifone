import React, {Component, Fragment} from 'react';

class Price extends Component {
	render() {
		return (
			<Fragment>
				<div className="device-price">
					<div className="row">
						<div className="col-xs-12 col-md-6 device-price-image">
							<img src="/lib/images/xs.png" alt="" className="img-responsive center-block"/>
						</div>
						<div className="col-xs-12 col-md-6 device-price-table">
							<table className="table table-hover table-bordered" style={{maxWidth: '500px', margin: '0 auto'}}>
								<thead>
								<tr>
									<th>Máy điện thoại</th>
									<th>Giá (đ)</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>iPhone XS 64Gb</td>
									<td>27.810.000 </td>
								</tr>
								<tr>
									<td>iPhone XS 256GB</td>
									<td>32.110.000 </td>
								</tr>
								<tr>
									<td>iPhone XS 512GB</td>
									<td>37.610.000</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-md-6 device-price-image col-md-push-6">
							<img src="/lib/images/xsmax.png" alt="" className="img-responsive center-block"/>
						</div>
						<div className="col-xs-12 col-md-6 device-price-table col-md-pull-6">
							<table className="table table-hover table-bordered" style={{maxWidth: '500px', margin: '0 auto'}}>
								<thead>
								<tr>
									<th>Máy điện thoại</th>
									<th>Giá (đ)</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>iPhone XS Max 64GB</td>
									<td>30.910.000</td>
								</tr>
								<tr>
									<td>iPhone XS Max 256GB</td>
									<td>35.110.000</td>
								</tr>
								<tr>
									<td>iPhone XS Max 512GB</td>
									<td>40.710.000</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-md-6 device-price-image">
							<img src="/lib/images/xr.png" alt="" className="img-responsive center-block"/>
						</div>
						<div className="col-xs-12 col-md-6 device-price-table">
							<table className="table table-hover table-bordered" style={{maxWidth: '500px', margin: '0 auto'}}>
								<thead>
								<tr>
									<th>Máy điện thoại</th>
									<th>Giá (đ)</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>iPhone XR 64Gb</td>
									<td>20.910.000</td>
								</tr>
								<tr>
									<td>iPhone XR 128GB</td>
									<td>22.310.000</td>
								</tr>
								<tr>
									<td>iPhone XR 256GB</td>
									<td>25.110.000</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<p>01 BHM trả trước tài khoản 0đ: 50.000đ.</p>
				<p>240.000đ MobiEZ nạp sẵn vào tài khoản của khách hàng để đăng ký gói cước M12 chu kỳ dành cho TBTT (giao dịch viên hỗ trợ khách hàng đăng ký): 240.000đ.</p>
			</Fragment>

		);
	}
}

export default Price;