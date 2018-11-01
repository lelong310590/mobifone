import React, {Component} from 'react';
import Price from "./Price";
import PricePackage from "./PricePackage";

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

					<p><b>*Bộ sản phẩm gồm có:</b></p>
					<p>01 điện thoại iPhone:</p>

					<Price/>

					<PricePackage/>

					<p>01 BHM trả trước tài khoản 0đ: 50.000đ.</p>
					<p>240.000đ MobiEZ nạp sẵn vào tài khoản của khách hàng để đăng ký gói cước M12 chu kỳ dành cho TBTT (giao dịch viên hỗ trợ khách hàng đăng ký): 240.000đ.</p>
				</div>
			</div>
		)
	}
}

export default Package;