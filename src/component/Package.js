import React, {Component} from 'react';

class Package extends Component {
	render() {
		return (
			<div className="main-content">
				<div className="container">
					<div className="table-responsive">
						<table className="table table-hover table-bordered">
							<thead>
							<tr>
								<th>STT</th>
								<th>Nội dung</th>
								<th colSpan="6" className="text-center">Gói cước cam kết mua kèm máy</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td className="text-center">1</td>
								<td className="text-center">Tên gói cước</td>
								<td className="text-center"><b>M299</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>M599</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>M1399</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>M299</b><br/><b>18 tháng</b></td>
								<td className="text-center"><b>M599</b><br/><b>18 tháng</b></td>
								<td className="text-center"><b>M1399</b><br/><b>18 tháng</b></td>
							</tr>
							<tr>
								<td className="text-center">2</td>
								<td colSpan="7">Dung lượng gói cước / chu kỳ</td>
							</tr>
							<tr>
								<td></td>
								<td>Thoại nội mạng</td>
								<td className="text-center">400 phút</td>
								<td className="text-center">600 phút</td>
								<td className="text-center">1200 phút</td>
								<td className="text-center">400 phút</td>
								<td className="text-center">600 phút</td>
								<td className="text-center">1200 phút</td>
							</tr>
							<tr>
								<td></td>
								<td>Thoại liên mạng</td>
								<td className="text-center">40 phút</td>
								<td className="text-center">60 phút</td>
								<td className="text-center">300 phút</td>
								<td className="text-center">40 phút</td>
								<td className="text-center">60 phút</td>
								<td className="text-center">300 phút</td>
							</tr>
							<tr>
								<td></td>
								<td>Data</td>
								<td className="text-center">3 GB</td>
								<td className="text-center">6 GB</td>
								<td className="text-center">10 GB</td>
								<td className="text-center">3 GB</td>
								<td className="text-center">6 GB</td>
								<td className="text-center">10 GB</td>
							</tr>
							<tr>
								<td></td>
								<td>SMS Nội mạng</td>
								<td className="text-center">40 SMS</td>
								<td className="text-center">60 SMS</td>
								<td className="text-center">300 SMS</td>
								<td className="text-center">40 SMS</td>
								<td className="text-center">60 SMS</td>
								<td className="text-center">300 SMS</td>
							</tr>
							<tr>
								<td className="text-center">3</td>
								<td><b>Thời gian cam kết (tháng)</b></td>
								<td className="text-center">12</td>
								<td className="text-center">12</td>
								<td className="text-center">12</td>
								<td className="text-center">18</td>
								<td className="text-center">18</td>
								<td className="text-center">18</td>
							</tr>
							<tr>
								<td className="text-center">4</td>
								<td><b>Giá gói cước/tháng (chưa bao gồm cước thuê bao (đ) – đã có VAT)</b></td>
								<td className="text-center" style={{color: 'red'}}>299.000</td>
								<td className="text-center" style={{color: 'red'}}>599.000</td>
								<td className="text-center" style={{color: 'red'}}>1399.000</td>
								<td className="text-center" style={{color: 'red'}}>299.000</td>
								<td className="text-center" style={{color: 'red'}}>599.000</td>
								<td className="text-center" style={{color: 'red'}}>1399.000</td>
							</tr>
							<tr>
								<td className="text-center">5</td>
								<td><b>Giá bán điện thoại (đ) – đã có VAT</b></td>
								<td colSpan="7"></td>
							</tr>
							<tr>
								<td></td>
								<td className="text-right">iPhone X 64GB</td>
								<td className="text-center" style={{color: 'red'}}>26.390.000</td>
								<td className="text-center" style={{color: 'red'}}>23.490.000</td>
								<td className="text-center" style={{color: 'red'}}>19.190.000</td>
								<td className="text-center" style={{color: 'red'}}>25.290.000</td>
								<td className="text-center" style={{color: 'red'}}>20.990.000</td>
								<td className="text-center" style={{color: 'red'}}>14.690.000</td>
							</tr>
							<tr>
								<td></td>
								<td className="text-right">iPhone X 256GB</td>
								<td className="text-center" style={{color: 'red'}}>30.790.000</td>
								<td className="text-center" style={{color: 'red'}}>27.890.000</td>
								<td className="text-center" style={{color: 'red'}}>23.590.000</td>
								<td className="text-center" style={{color: 'red'}}>29.690.000</td>
								<td className="text-center" style={{color: 'red'}}>25.390.000</td>
								<td className="text-center" style={{color: 'red'}}>19.090.000</td>
							</tr>
							<tr>
								<td className="text-center">6</td>
								<td><b>Điều kiện</b></td>
								<td>Khách hàng tham gia chương trình mua máy kèm gói cước cam kết M299 trong 12 tháng.</td>
								<td>Khách hàng tham gia chương trình mua máy kèm gói cước cam kết M599 trong 12 tháng.</td>
								<td>Khách hàng tham gia chương trình mua máy kèm gói cước cam kết M1399 trong 12 tháng.</td>
								<td>Khách hàng tham gia chương trình mua máy kèm gói cước cam kết M299 trong 18 tháng.</td>
								<td>Khách hàng tham gia chương trình mua máy kèm gói cước cam kết M599 trong 18 tháng.</td>
								<td>Khách hàng tham gia chương trình mua máy kèm gói cước cam kết M1399 trong 18 tháng.</td>
							</tr>
							<tr>
								<td className="text-center">7</td>
								<td><b>Mức ký quỹ tham gia chương trình mua máy kèm gói cước (đ)</b></td>
								<td className="text-center" style={{color: 'red'}}>2.300.000</td>
								<td className="text-center" style={{color: 'red'}}>5.200.000</td>
								<td className="text-center" style={{color: 'red'}}>9.500.000</td>
								<td className="text-center" style={{color: 'red'}}>3.400.000</td>
								<td className="text-center" style={{color: 'red'}}>7.700.000</td>
								<td className="text-center" style={{color: 'red'}}>14.000.000</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default Package;