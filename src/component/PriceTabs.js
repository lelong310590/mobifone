import React, {Component, Fragment} from 'react';
import {Tabs, Tab} from 'react-bootstrap';

class PriceTabs extends Component {
	render() {
		return (
			<Fragment>
				<p>1. <b>Giá bán dành cho thuê bao trả sau (TBTS) phát triển mới mua máy kèm gói cước:</b></p>
				<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
					<Tab eventKey={1} title="iPhone XS">
						<div class="table-responsive">
							<table className="table table-hover">
								<thead>
								<tr>
									<th className="text-center">Loại máy</th>
									<th className="text-center">Giá máy không kèm gói cước (VNĐ)</th>
									<th className="text-center" colSpan="6">Giá máy khi khách hàng cam kết sử dụng gói cước trả sau (VNĐ)</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td></td>
									<td></td>
									<td className="text-center"><b>Sub599</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub999</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1399</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub599</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub999</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1399</b><br/><b>18 tháng</b></td>
								</tr>

								<tr>
									<td>
										iPhone XS 64Gb
									</td>
									<td className="text-center">27.810.000</td>
									<td className="text-center">22.490.00</td>
									<td className="text-center">18.990.000</td>
									<td className="text-center">15.790.000</td>
									<td className="text-center">19.890.000</td>
									<td className="text-center">14.890.000</td>
									<td className="text-center">10.490.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS 256GB
									</td>
									<td className="text-center">32.110.000</td>
									<td className="text-center">26.890.000</td>
									<td className="text-center">23.390.000</td>
									<td className="text-center">20.190.000</td>
									<td className="text-center">24.290.000</td>
									<td className="text-center">19.290.000</td>
									<td className="text-center">14.890.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS 512GB
									</td>
									<td className="text-center">37.610.000</td>
									<td className="text-center">32.290.000</td>
									<td className="text-center">28.790.000</td>
									<td className="text-center">25.590.000</td>
									<td className="text-center">29.690.000</td>
									<td className="text-center">24.690.000</td>
									<td className="text-center">20.290.000</td>
								</tr>

								<tr>
									<td>
										Ký quỹ khi mua máy kèm gói cước trả sau
									</td>
									<td className="text-center">0</td>
									<td className="text-center"><b>5.500.000</b></td>
									<td className="text-center"><b>8.900.000</b></td>
									<td className="text-center"><b>12.200.000</b></td>
									<td className="text-center"><b>8.050.000</b></td>
									<td className="text-center"><b>13.050.000</b></td>
									<td className="text-center"><b>17.850.000</b></td>
								</tr>
								</tbody>
							</table>
						</div>

					</Tab>
					<Tab eventKey={2} title="iPhone XS Max">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
								<tr>
									<th className="text-center">Loại máy</th>
									<th className="text-center">Giá máy không kèm gói cước (VNĐ)</th>
									<th className="text-center" colSpan="6">Giá máy khi khách hàng cam kết sử dụng gói cước
										trả sau (VNĐ)
									</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td></td>
									<td></td>
									<td className="text-center"><b>Sub599</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub999</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1399</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub599</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub999</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1399</b><br/><b>18 tháng</b></td>
								</tr>

								<tr>
									<td>
										iPhone XS Max 64Gb
									</td>
									<td className="text-center">30.910.000</td>
									<td className="text-center">25.590.000</td>
									<td className="text-center">22.090.000</td>
									<td className="text-center">18.890.000</td>
									<td className="text-center">22.990.000</td>
									<td className="text-center">17.990.000</td>
									<td className="text-center">13.590.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS Max 256GB
									</td>
									<td className="text-center">35.110.000</td>
									<td className="text-center">29.790.000</td>
									<td className="text-center">26.290.000</td>
									<td className="text-center">23.090.000</td>
									<td className="text-center">27.190.000</td>
									<td className="text-center">22.190.000</td>
									<td className="text-center">17.790.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS Max 512GB
									</td>
									<td className="text-center">40.710.000</td>
									<td className="text-center">35.490.000</td>
									<td className="text-center">31.990.000</td>
									<td className="text-center">28.790.000</td>
									<td className="text-center">32.890.000</td>
									<td className="text-center">27.890.000</td>
									<td className="text-center">23.490.000</td>
								</tr>

								<tr>
									<td>
										Ký quỹ khi mua máy kèm gói cước trả sau
									</td>
									<td className="text-center">0</td>
									<td className="text-center"><b>5.500.000</b></td>
									<td className="text-center"><b>8.900.000</b></td>
									<td className="text-center"><b>12.200.000</b></td>
									<td className="text-center"><b>8.050.000</b></td>
									<td className="text-center"><b>13.050.000</b></td>
									<td className="text-center"><b>17.850.000</b></td>
								</tr>
								</tbody>
							</table>
						</div>
					</Tab>
					<Tab eventKey={3} title="iPhone XR">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
								<tr>
									<th className="text-center">Loại máy</th>
									<th className="text-center">Giá máy không kèm gói cước (VNĐ)</th>
									<th className="text-center" colSpan="6">Giá máy khi khách hàng cam kết sử dụng gói cước
										trả sau (VNĐ)
									</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td></td>
									<td></td>
									<td className="text-center"><b>Sub599</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub999</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1399</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub599</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub999</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1399</b><br/><b>18 tháng</b></td>
								</tr>

								<tr>
									<td>
										iPhone XR 64Gb
									</td>
									<td className="text-center">20.910.000</td>
									<td className="text-center">15.490.000</td>
									<td className="text-center">11.990.000</td>
									<td className="text-center">8.990.000</td>
									<td className="text-center">12.990.000</td>
									<td className="text-center">7.990.000</td>
									<td className="text-center">3.290.000</td>
								</tr>

								<tr>
									<td>
										iPhone XR 128
									</td>
									<td className="text-center">22.310.000</td>
									<td className="text-center">16.990.000</td>
									<td className="text-center">13.490.000</td>
									<td className="text-center">10.490.000</td>
									<td className="text-center">14.490.000</td>
									<td className="text-center">9.490.000</td>
									<td className="text-center">4.490.000</td>
								</tr>

								<tr>
									<td>
										iPhone XR
									</td>
									<td className="text-center">25.110.000</td>
									<td className="text-center">19.990.000</td>
									<td className="text-center">16.490.000</td>
									<td className="text-center">12.990.000</td>
									<td className="text-center">17.490.000</td>
									<td className="text-center">12.490.000</td>
									<td className="text-center">7.490.000</td>
								</tr>

								<tr>
									<td>
										Ký quỹ khi mua máy kèm gói cước trả sau
									</td>
									<td className="text-center">0</td>
									<td className="text-center"><b>5.500.000</b></td>
									<td className="text-center"><b>8.900.000</b></td>
									<td className="text-center"><b>12.200.000</b></td>
									<td className="text-center"><b>8.050.000</b></td>
									<td className="text-center"><b>13.050.000</b></td>
									<td className="text-center"><b>17.850.000</b></td>
								</tr>
								</tbody>
							</table>
						</div>
					</Tab>
				</Tabs>
				<p><i>Khách hàng tham gia chương trình mua máy kèm bộ hòa mạng trả trước và đăng ký gói Sub599/ Sub999/Sub1399 12 tháng/18 tháng tương ứng.</i></p>
				<br/>
				<p>2. <b>Giá bán dành cho thuê bao trả sau hiện hữu mua máy kèm gói cước</b></p>
				<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
					<Tab eventKey={1} title="iPhone XS">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
								<tr>
									<th className="text-center">Loại máy</th>
									<th className="text-center">Giá máy không kèm gói cước (VNĐ)</th>
									<th className="text-center" colSpan="6">Giá máy khi khách hàng cam kết sử dụng gói
										cước trả sau (VNĐ)
									</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td></td>
									<td></td>
									<td className="text-center"><b>Sub699</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1099</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1499</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub699</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1099</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1499</b><br/><b>18 tháng</b></td>
								</tr>

								<tr>
									<td>
										iPhone XS 64Gb
									</td>
									<td className="text-center">27.810.000</td>
									<td className="text-center">22.890.000</td>
									<td className="text-center">19.490.000</td>
									<td className="text-center">16.490.000</td>
									<td className="text-center">20.390.000</td>
									<td className="text-center">15.590.000</td>
									<td className="text-center">11.490.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS 256GB
									</td>
									<td className="text-center">32.110.000</td>
									<td className="text-center">27.290.000</td>
									<td className="text-center">23.890.000</td>
									<td className="text-center">20.890.000</td>
									<td className="text-center">24.790.000</td>
									<td className="text-center">19.990.000</td>
									<td className="text-center">15.890.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS 512GB
									</td>
									<td className="text-center">37.610.000</td>
									<td className="text-center">32.690.000</td>
									<td className="text-center">29.290.000</td>
									<td className="text-center">26.290.000</td>
									<td className="text-center">30.190.000</td>
									<td className="text-center">25.390.000</td>
									<td className="text-center">21.290.000</td>
								</tr>

								<tr>
									<td>
										Ký quỹ khi mua máy kèm gói cước trả sau
									</td>
									<td className="text-center">0</td>
									<td className="text-center"><b>5.100.000</b></td>
									<td className="text-center"><b>8.350.000</b></td>
									<td className="text-center"><b>11.400.000</b></td>
									<td className="text-center"><b>7.500.000</b></td>
									<td className="text-center"><b>12.250.000</b></td>
									<td className="text-center"><b>16.750.000</b></td>
								</tr>
								</tbody>
							</table>
						</div>

					</Tab>
					<Tab eventKey={2} title="iPhone XS Max">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
								<tr>
									<th className="text-center">Loại máy</th>
									<th className="text-center">Giá máy không kèm gói cước (VNĐ)</th>
									<th className="text-center" colSpan="6">Giá máy khi khách hàng cam kết sử dụng gói
										cước
										trả sau (VNĐ)
									</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td></td>
									<td></td>
									<td className="text-center"><b>Sub699</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1099</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1499</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub699</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1099</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1499</b><br/><b>18 tháng</b></td>
								</tr>

								<tr>
									<td>
										iPhone XS Max 64Gb
									</td>
									<td className="text-center">30.910.000</td>
									<td className="text-center">25.990.000</td>
									<td className="text-center">22.590.000</td>
									<td className="text-center">19.590.000</td>
									<td className="text-center">23.490.000</td>
									<td className="text-center">18.690.000</td>
									<td className="text-center">14.590.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS Max 256GB
									</td>
									<td className="text-center">35.110.000</td>
									<td className="text-center">30.190.000</td>
									<td className="text-center">26.790.000</td>
									<td className="text-center">23.790.000</td>
									<td className="text-center">27.690.000</td>
									<td className="text-center">22.890.000</td>
									<td className="text-center">18.790.000</td>
								</tr>

								<tr>
									<td>
										iPhone XS Max 512GB
									</td>
									<td className="text-center">40.710.000</td>
									<td className="text-center">35.890.000</td>
									<td className="text-center">32.490.000</td>
									<td className="text-center">29.490.000</td>
									<td className="text-center">33.490.000</td>
									<td className="text-center">28.590.000</td>
									<td className="text-center">24.490.000</td>
								</tr>

								<tr>
									<td>
										Ký quỹ khi mua máy kèm gói cước trả sau
									</td>
									<td className="text-center">0</td>
									<td className="text-center"><b>5.100.000</b></td>
									<td className="text-center"><b>8.350.000</b></td>
									<td className="text-center"><b>11.400.000</b></td>
									<td className="text-center"><b>7.500.000</b></td>
									<td className="text-center"><b>12.250.000</b></td>
									<td className="text-center"><b>16.750.000</b></td>
								</tr>
								</tbody>
							</table>
						</div>
					</Tab>
					<Tab eventKey={3} title="iPhone XR">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
								<tr>
									<th className="text-center">Loại máy</th>
									<th className="text-center">Giá máy không kèm gói cước (VNĐ)</th>
									<th className="text-center" colSpan="6">Giá máy khi khách hàng cam kết sử dụng gói
										cước
										trả sau (VNĐ)
									</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td></td>
									<td></td>
									<td className="text-center"><b>Sub699</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1099</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub1499</b><br/><b>12 tháng</b></td>
									<td className="text-center"><b>Sub699</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1099</b><br/><b>18 tháng</b></td>
									<td className="text-center"><b>Sub1499</b><br/><b>18 tháng</b></td>
								</tr>

								<tr>
									<td>
										iPhone XR 64Gb
									</td>
									<td className="text-center">20.910.000</td>
									<td className="text-center">15.890.000</td>
									<td className="text-center">12.590.000</td>
									<td className="text-center">9.590.00</td>
									<td className="text-center">13.490.000</td>
									<td className="text-center">8.690.000</td>
									<td className="text-center">4.290.000</td>
								</tr>

								<tr>
									<td>
										iPhone XR 128GB
									</td>
									<td className="text-center">22.310.000</td>
									<td className="text-center">20.190.000</td>
									<td className="text-center">16.890.00</td>
									<td className="text-center">13.990.000</td>
									<td className="text-center">17.890.000</td>
									<td className="text-center">12.990.000</td>
									<td className="text-center">8.490.000</td>
								</tr>

								<tr>
									<td>
										iPhone XR 256GB
									</td>
									<td className="text-center">25.110.000</td>
									<td className="text-center">19.990.000</td>
									<td className="text-center">16.490.000</td>
									<td className="text-center">12.990.000</td>
									<td className="text-center">17.490.000</td>
									<td className="text-center">12.490.000</td>
									<td className="text-center">7.490.000</td>
								</tr>

								<tr>
									<td>
										Ký quỹ khi mua máy kèm gói cước trả sau
									</td>
									<td className="text-center">0</td>
									<td className="text-center"><b>5.100.000</b></td>
									<td className="text-center"><b>8.350.000</b></td>
									<td className="text-center"><b>11.400.000</b></td>
									<td className="text-center"><b>7.500.000</b></td>
									<td className="text-center"><b>12.250.000</b></td>
									<td className="text-center"><b>16.750.000</b></td>
								</tr>
								</tbody>
							</table>
						</div>
					</Tab>
				</Tabs>
				<p><i>Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub699/ Sub1099/ Sub1499 trong 12 tháng/ 18 tháng tương ứng.</i></p>
				<br/>
				<br/>
			</Fragment>

		);
	}
}

export default PriceTabs;