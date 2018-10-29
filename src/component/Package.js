import React, {Component} from 'react';

class Package extends Component {
	render() {
		return (
			<div className="main-content">
				<div className="container">
					<p>1. <b>Quy định giá bán chương trình mua máy kèm gói cước với dòng điện thoại iPhoneXs, iPhoneXs Max, iPhoneXr</b></p>
					<ul>
						<li>Nội dung gói cước và điều kiện tham gia chương trình: Theo quy định hiện hành.</li>
						<li>Giá bán máy và mức đặt cọc cho khách hàng mua máy kèm gói cước cam kết: Phụ lục I đính kèm.</li>
						<li>Đối tượng áp dụng: tất cả khách hàng có đăng ký sử dụng gói cước cho thuê bao trả trước (với gói M12) và thuê bao trả sau (với gói Sub599, Sub999, Sub1399, Sub699, Sub1099, Sub1499) của MobiFone. </li>
						<li>Gói cước: Khách hàng phải cam kết sử dụng gói cước theo quy định của từng gói cước.</li>
					</ul>
					<p>2. <b>Thời gian áp dụng</b>: Từ ngày 02/11/2018.</p>
					<p>3. <b>Phạm vi áp dụng</b>: toàn quốc, cụ thể trên các kênh bán hàng sau:</p>
					<ul>
						<li>Hệ thống Cửa hàng bán lẻ</li>
						<li>Hệ thống Cửa hàng giao dịch MobiFone (cửa hàng cấp 1);</li>
						<li>Hệ thống cửa hàng giao dịch Quận/Huyện;</li>
						<li>Nhân viên bán hàng AM/KAM;</li>
						<li>Đại lý subsidy bán máy.</li>
					</ul>
					<p>4. <b>Quy định về việc chi trả chi phí phát triển/duy trì thuê bao, chi phí bán máy cho Công ty cung cấp dịch vụ hỗ trợ kinh doanh</b></p>
					<ul>
						<li>Mức chi trả bán máy: 100.000đ/máy (chưa bao gồm VAT) (với cửa hàng bán lẻ do đối tác cung cấp máy chi trả, với các kênh khác do MobiFone chi trả).</li>
						<li>Quy định chi trả phí duy trì đối với thuê bao trả sau đăng ký gói cước cam kết: Trước khi tính phí duy trì thuê bao để chi trả cho các công ty cung cấp dịch vụ hỗ trợ kinh doanh, doanh thu của các thuê bao có sử dụng gói cước cam kết phải được giảm trừ số tiền bằng doanh thu máy thu trong gói mỗi chu kỳ quy định tại phụ lục I.
						</li>
					</ul>
					<h4 className="text-center">Phụ lục I</h4>
					<h4 className="text-center text-uppercase">GIÁ BÁN MÁY VÀ MỨC ĐẶT CỌC</h4>
					<p className="text-center">(Ban hành kèm theo công văn số             /MOBIFONE-KHCN ngày   /10/2018)</p>
					<p>1. <b>Giá bán dành cho thuê bao trả sau (TBTS) phát triển mới mua máy kèm gói cước:</b></p>
					<div className="table-responsive">
						<table className="table table-hover table-bordered">
							<thead>
							<tr>
								<th>STT</th>
								<th width="280">Nội dung</th>
								<th colSpan="7" className="text-center">Gói cước cam kết mua kèm máy</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td className="text-center">1</td>
								<td className="text-center">Loại thuê bao</td>
								<td className="text-center">TBTT phát triển mới</td>
								<td className="text-center" colSpan="6">TBTS phát triển mới (bao gồm thuê bao trả trước chuyển trả sau)</td>
							</tr>
							<tr>
								<td className="text-center">2</td>
								<td className="text-center">Tên gói cước
									(thời gian cam kết)
								</td>
								<td className="text-center"><b>M12</b></td>
								<td className="text-center"><b>Sub599</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>Sub999</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>Sub1399</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>Sub599</b><br/><b>18 tháng</b></td>
								<td className="text-center"><b>Sub999</b><br/><b>18 tháng</b></td>
								<td className="text-center"><b>Sub1399</b><br/><b>18 tháng</b></td>
							</tr>
							<tr>
								<td className="text-center">3</td>
								<td className="text-center">
									<b>Giá gói cước/tháng (chưa bao gồm cước thuê bao (đ) – đã có VAT)</b>
								</td>
								<td className="text-center"><b></b></td>
								<td className="text-center"><money style={{color: 'red'}}>599.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>999.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>1.399.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>599.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>999.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>1.399.000</money></td>
							</tr>
							<tr>
								<td className="text-center">4</td>
								<td className="text-center">
									<b>Giá bán điện thoại cho Khách hàng (đ) – đã có VAT</b>
								</td>
								<td className="text-center">Giá bán bộ sản phẩm*:</td>
								<td className="text-center" colSpan="6"></td>
							</tr>
							<tr>
								<td className="text-center">4.1</td>
								<td className="text-center">
									iPhone XS 64Gb
								</td>
								<td className="text-center">28.100.000</td>
								<td className="text-center">22.490.00</td>
								<td className="text-center">18.990.000</td>
								<td className="text-center">15.790.000</td>
								<td className="text-center">19.890.000</td>
								<td className="text-center">14.890.000</td>
								<td className="text-center">10.490.000</td>
							</tr>
							<tr>
								<td className="text-center">4.2</td>
								<td className="text-center">
									iPhone XS 256GB
								</td>
								<td className="text-center">32.400.000</td>
								<td className="text-center">26.890.000</td>
								<td className="text-center">23.390.000</td>
								<td className="text-center">20.190.000</td>
								<td className="text-center">24.290.000</td>
								<td className="text-center">19.290.000</td>
								<td className="text-center">14.890.000</td>
							</tr>
							<tr>
								<td className="text-center">4.3</td>
								<td className="text-center">
									iPhone XS 512GB
								</td>
								<td className="text-center">37.900.000</td>
								<td className="text-center">32.290.000</td>
								<td className="text-center">28.790.000</td>
								<td className="text-center">25.590.000</td>
								<td className="text-center">29.690.000</td>
								<td className="text-center">24.690.000</td>
								<td className="text-center">20.290.000</td>
							</tr>
							<tr>
								<td className="text-center">4.4</td>
								<td className="text-center">
									iPhone XS Max 64GB
								</td>
								<td className="text-center">31.200.000</td>
								<td className="text-center">25.590.000</td>
								<td className="text-center">22.090.000</td>
								<td className="text-center">18.890.000</td>
								<td className="text-center">22.990.000</td>
								<td className="text-center">17.990.000</td>
								<td className="text-center">13.590.000</td>
							</tr>
							<tr>
								<td className="text-center">4.5</td>
								<td className="text-center">
									iPhone XS Max 256GB
								</td>
								<td className="text-center">35.400.000</td>
								<td className="text-center">29.790.000</td>
								<td className="text-center">26.290.000</td>
								<td className="text-center">23.090.000</td>
								<td className="text-center">27.190.000</td>
								<td className="text-center">22.190.000</td>
								<td className="text-center">17.790.000</td>
							</tr>
							<tr>
								<td className="text-center">4.6</td>
								<td className="text-center">
									iPhone XS Max 512GB
								</td>
								<td className="text-center">41.000.000</td>
								<td className="text-center">35.490.000</td>
								<td className="text-center">31.990.000</td>
								<td className="text-center">28.790.000</td>
								<td className="text-center">32.890.000</td>
								<td className="text-center">27.890.000</td>
								<td className="text-center">23.490.000</td>
							</tr>
							<tr>
								<td className="text-center">4.7</td>
								<td className="text-center">
									iPhone XR 64Gb
								</td>
								<td className="text-center">21.200.000</td>
								<td className="text-center">15.490.000</td>
								<td className="text-center">11.990.000</td>
								<td className="text-center">8.990.000</td>
								<td className="text-center">12.990.000</td>
								<td className="text-center">7.990.000</td>
								<td className="text-center">3.290.000</td>
							</tr>
							<tr>
								<td className="text-center">4.8</td>
								<td className="text-center">
									iPhone XR 128GB
								</td>
								<td className="text-center">22.600.000</td>
								<td className="text-center">16.990.000</td>
								<td className="text-center">13.490.000</td>
								<td className="text-center">10.490.000</td>
								<td className="text-center">14.490.000</td>
								<td className="text-center">9.490.000</td>
								<td className="text-center">4.490.000</td>
							</tr>
							<tr>
								<td className="text-center">4.9</td>
								<td className="text-center">
									iPhone XR 256GB
								</td>
								<td className="text-center">25.400.000</td>
								<td className="text-center">19.990.000</td>
								<td className="text-center">16.490.000</td>
								<td className="text-center">12.990.000</td>
								<td className="text-center">17.490.000</td>
								<td className="text-center">12.490.000</td>
								<td className="text-center">7.490.000</td>
							</tr>
							<tr>
								<td className="text-center">5</td>
								<td className="text-center">
									<b>Điều kiện</b>
								</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm bộ hòa mạng trả trước và đăng ký gói M12 12 tháng </td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub599 trong 12 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub999 trong 12 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub1399 trong 12 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub599 trong 18 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub999 trong 18 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub1399 trong 18 tháng</td>
							</tr>
							<tr>
								<td className="text-center">6</td>
								<td className="text-center">
									<b>Mức ký quỹ tham gia chương trình mua máy kèm gói cước (đ)</b>
								</td>
								<td className="text-center"></td>
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
					<p>2. <b>Giá bán dành cho thuê bao trả sau hiện hữu mua máy kèm gói cước</b></p>
					<div className="table-responsive">
						<table className="table table-hover table-bordered">
							<thead>
							<tr>
								<th>STT</th>
								<th width="280">Nội dung</th>
								<th colSpan="6" className="text-center">Gói cước cam kết mua kèm máy điện thoại</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td className="text-center">1</td>
								<td className="text-center">Loại thuê bao</td>
								<td className="text-center" colSpan="6">TBTS hiện hữu</td>
							</tr>
							<tr>
								<td className="text-center">2</td>
								<td className="text-center">Tên gói cước
									(thời gian cam kết)
								</td>
								<td className="text-center"><b>Sub699</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>Sub1099</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>Sub1499</b><br/><b>12 tháng</b></td>
								<td className="text-center"><b>Sub699</b><br/><b>18 tháng</b></td>
								<td className="text-center"><b>Sub1099</b><br/><b>18 tháng</b></td>
								<td className="text-center"><b>Sub1499</b><br/><b>18 tháng</b></td>
							</tr>
							<tr>
								<td className="text-center">3</td>
								<td className="text-center">Giá bán điện thoại cho Khách hàng (đ) – đã có VAT
								</td>
								<td className="text-center"><money style={{color: 'red'}}>699.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>1.099.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>1.499.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>699.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>1.099.000</money></td>
								<td className="text-center"><money style={{color: 'red'}}>1.499.000</money></td>
							</tr>
							<tr>
								<td className="text-center">4</td>
								<td className="text-center">Giá bán điện thoại cho Khách hàng (đ) – đã có VAT
								</td>
								<td className="text-center" colSpan="6"></td>
							</tr>
							<tr>
								<td className="text-center">4.1</td>
								<td className="text-center">
									iPhone XS 64Gb
								</td>
								<td className="text-center">22.890.000</td>
								<td className="text-center">19.490.000</td>
								<td className="text-center">16.490.000</td>
								<td className="text-center">20.390.000</td>
								<td className="text-center">15.590.000</td>
								<td className="text-center">11.490.000</td>
							</tr>
							<tr>
								<td className="text-center">4.2</td>
								<td className="text-center">
									iPhone XS 256GB
								</td>
								<td className="text-center">27.290.000</td>
								<td className="text-center">23.890.000</td>
								<td className="text-center">20.890.000</td>
								<td className="text-center">24.790.000</td>
								<td className="text-center">19.990.000</td>
								<td className="text-center">15.890.000</td>
							</tr>
							<tr>
								<td className="text-center">4.3</td>
								<td className="text-center">
									iPhone XS 512GB
								</td>
								<td className="text-center">32.690.000</td>
								<td className="text-center">29.290.000</td>
								<td className="text-center">26.290.000</td>
								<td className="text-center">30.190.000</td>
								<td className="text-center">25.390.000</td>
								<td className="text-center">21.290.000</td>
							</tr>
							<tr>
								<td className="text-center">4.4</td>
								<td className="text-center">
									iPhone XS Max 64GB
								</td>
								<td className="text-center">25.990.000</td>
								<td className="text-center">22.590.000</td>
								<td className="text-center">19.590.000</td>
								<td className="text-center">23.490.000</td>
								<td className="text-center">18.690.000</td>
								<td className="text-center">14.590.000</td>
							</tr>
							<tr>
								<td className="text-center">4.5</td>
								<td className="text-center">
									iPhone XS Max 256GB
								</td>
								<td className="text-center">30.190.000</td>
								<td className="text-center">26.790.000</td>
								<td className="text-center">23.790.000</td>
								<td className="text-center">27.690.000</td>
								<td className="text-center">22.890.000</td>
								<td className="text-center">18.790.000</td>
							</tr>
							<tr>
								<td className="text-center">4.6</td>
								<td className="text-center">
									iPhone XS Max 512GB
								</td>
								<td className="text-center">35.890.000</td>
								<td className="text-center">32.490.000</td>
								<td className="text-center">29.490.000</td>
								<td className="text-center">33.490.000</td>
								<td className="text-center">28.590.000</td>
								<td className="text-center">24.490.000</td>
							</tr>
							<tr>
								<td className="text-center">4.7</td>
								<td className="text-center">
									iPhone XR 64Gb
								</td>
								<td className="text-center">15.890.000</td>
								<td className="text-center">12.590.000</td>
								<td className="text-center">9.590.00</td>
								<td className="text-center">13.490.000</td>
								<td className="text-center">8.690.000</td>
								<td className="text-center">4.290.000</td>
							</tr>
							<tr>
								<td className="text-center">4.8</td>
								<td className="text-center">
									iPhone XR 128GB
								</td>
								<td className="text-center">17.290.000</td>
								<td className="text-center">13.990.000</td>
								<td className="text-center">10.990.000</td>
								<td className="text-center">14.890.000</td>
								<td className="text-center">10.190.000</td>
								<td className="text-center">5.690.000</td>
							</tr>
							<tr>
								<td className="text-center">4.9</td>
								<td className="text-center">
									iPhone XR 256GB
								</td>
								<td className="text-center">20.190.000</td>
								<td className="text-center">16.890.00</td>
								<td className="text-center">13.990.000</td>
								<td className="text-center">17.890.000</td>
								<td className="text-center">12.990.000</td>
								<td className="text-center">8.490.000</td>
							</tr>
							<tr>
								<td className="text-center">5</td>
								<td className="text-center">
									<b>Điều kiện</b>
								</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub699 trong 12 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub1099 trong 12 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub1499 trong 12 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub699 trong 18 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub1099 trong 18 tháng</td>
								<td className="text-center">Khách hàng tham gia chương trình mua máy kèm gói cước cam kết Sub1499 trong 18 tháng</td>
							</tr>
							<tr>
								<td className="text-center">6</td>
								<td className="text-center">
									<b>Mức ký quỹ tham gia chương trình mua máy kèm gói cước (đ)</b>
								</td>
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
					<p><b>*Bộ sản phẩm gồm có:</b></p>
					<p>01 điện thoại iPhone:</p>
					<div className="table-responsive">
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
					<p>01 BHM trả trước tài khoản 0đ: 50.000đ.</p>
					<p>240.000đ MobiEZ nạp sẵn vào tài khoản của khách hàng để đăng ký gói cước M12 chu kỳ dành cho TBTT (giao dịch viên hỗ trợ khách hàng đăng ký): 240.000đ.</p>
				</div>
			</div>
		)
	}
}

export default Package;