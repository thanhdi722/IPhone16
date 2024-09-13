/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import "./Section2.css";

// Step 1: Define the interface for the product data
interface Product {
  name: string;
  color: string;
  installmentPrice: string;
  prepay: string;
  monthlyInstallment: string;
  interestPaidByStore: string;
}

function Section2() {
  // Step 2: Use the interface to type the state
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const sheetId = "1SzhpyMazyrVdn5AAPr4pnO8yDJrBMbPTWoZqUJM6jz8";
      const range = "Sheet1!A2:F100";
      const apiKey = "AIzaSyDNNu_YwcLn1ag-3EG2z37ZLrQ9IjLID_4";

      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );
        const result = await response.json();

        if (result && result.values) {
          const formattedData: Product[] = result.values.map(
            (item: string[]) => ({
              name: item[0],
              color: item[1],
              installmentPrice: item[2] + "đ",
              prepay: item[3] + "đ",
              monthlyInstallment: item[4] + "đ",
              interestPaidByStore: item[5] + "đ",
            })
          );
          setData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#fffcee" }}>
      <div className="ThreeZeroInstallment-Section2-ContainerBox">
        <h1 style={{ color: "red", fontWeight:"700" }}>II.TRẢ GÓP QUA SHINHAN BANK</h1>
        <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "700" }}>
          Bảng giá iPhone 15 Series
          <br />
          (Áp dụng chương trình "TRẢ GÓP APPLE" qua Shinhan Finance)
        </p>
        <div className="ThreeZeroInstallment-Section2-tableContainer" style={{padding:"0 0 20px 0"}}>
          <table className="ThreeZeroInstallment-Section2-table">
            <thead>
              <tr style={{ background: "#ffd503" }}>
                <th>Sản phẩm</th>
                <th>Màu sắc</th>
                <th>Giá Bán Trả Góp "3 KHÔNG"</th>
                <th>Tiền Trả Trước Từ 50% Bạch Long Thu</th>
                <th>
                  Tiền Góp hàng tháng từ 50% còn lại 6 Tháng (Ngân hàng thu)
                </th>
                <th>
                  Tiền lãi suất hàng tháng Bạch Long đóng cho khách (khách không
                  cần đóng lãi hàng tháng)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((product, index) => (
                  <tr key={index}>
                    <td style={{ fontWeight: "700" }}>{product.name}</td>
                    <td>{product.color}</td>
                    <td>{product.installmentPrice}</td>
                    <td>{product.prepay}</td>
                    <td>{product.monthlyInstallment}</td>
                    <td>{product.interestPaidByStore}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center" }}>
                    Đang tải dữ liệu...
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr style={{ backgroundColor: "#ffed92" }}>
                <td colSpan={6}>
                  <h2>*Lưu ý:</h2>
                  <p>- Vẫn áp dụng chương trình khuyến mãi chạy cùng</p>
                  <p>
                    - Chương trình có lợi cho khách hàng rất lớn so với các hình
                    thức trả góp khác
                  </p>
                  <p>
                    - Chương trình không áp dụng giá trên web, chỉ áp dụng giá
                    bán trên bảng này (đã bao gồm 10% VAT)
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h2>Điều kiện vay trả góp qua Shinhan Finance</h2>
        <ul>
          <li>
            Người vay có độ tuổi từ 19 - 60 tuổi (Người làm công hưởng lương) và
            19 – 70 tuổi (Người tự doanh)
          </li>
          <li>Mức thu nhập từ 4.000.000 VNĐ trở lên</li>
        </ul>
        <h2>Hồ sơ vay trả góp qua Shinhan Finance</h2>
        <ul>
          <li>
            Khoản vay từ 3.000.000 – 30.000.000 VNĐ: Khách hàng chỉ cần cung cấp
            CMND/ CCCD (Riêng đối với sản phẩm Điện thoại di động khoản vay trên
            20.000.000 VNĐ khách hàng phải cung cấp thêm Chứng từ Chứng minh thu
            nhập)
          </li>
          <li>
            Khoản vay trên 30.000.000 VNĐ: Khách hàng cần cung cấp CMND/CCCD và
            Sổ hộ khẩu/ Bằng lái xe và chứng từ Chứng minh thu nhập.
          </li>
        </ul>
        <h2>Kiểm tra Hợp đồng vay trả góp</h2>
        <p>
          Có 2 cách để tra cứu thông tin hợp đồng vay tại Shinhan Finance. Khách
          hàng có thể dễ dàng tra cứu thông tin về hợp đồng vay trả góp tại
          Shinhan Finance ngay trên website chính thức hoặc trên ứng dụng
          iShinhan.
        </p>
        <strong>*Thao tác trên website chính thức của Shinhan Finance</strong>
        <ul>
          <li>
            Bước 01: Truy cập
            <strong style={{ color: "red" }}>
              {" "}
              https://shinhanfinance.com.vn/
            </strong>{" "}
            và chọn tìm kiếm. Tiếp đến chọn mục Thanh toán khoản vay.
          </li>
          <li>
            Bước 02: Nhập các thông tin về hợp đồng vay trả góp gồm số CMND/CCD
            và Nhập số hợp đồng vay. Bấm “Tiếp tục” để tra cứu.
          </li>
          <li>
            Bước 03: Tất cả thông tin về hợp đồng của bạn sẽ được hiển thị đầy
            đủ trên kết quả tra cứu.
          </li>
        </ul>
        <strong>*Thực hiện trên ứng dụng iShinhan</strong>
        <p>
          Sau khi đã có ứng dụng trên điện thoại, hãy thiết lập tài khoản và mật
          khẩu. Sau khi đăng nhập thành công, nếu muốn kiểm tra hợp đồng trả
          góp, hãy nhập thông tin liên quan như số hợp đồng, số CMND/CCCD và
          nhấn tra cứu.
        </p>
        <h2>Các cách thanh toán tiền trả góp Shinhan Finance</h2>
        <p>
          Hiện nay, Shinhan Finance đã liên kết với hầu hết ứng dụng thanh toán
          trực tuyến. Truy cập vào địa chỉ
          <strong style={{ wordBreak: "break-word" }}>
            {" "}
            https://shinhanfinance.com.vn/vi/repayment/method
          </strong>{" "}
          để lựa chọn hình thức thanh toán khoản vay:
        </p>
        <ul>
          <li>Thanh toán trực tiếp qua ngân hàng</li>
          <li>
            Thanh toán qua ứng dụng iShinhan (có thể tải cho điện thoại hệ điều
            hành Android và iOS)
          </li>
          <li>
            Thanh toán qua các ứng dụng ví điện tử: Momo, ShopeePay, ZaloPay,
            VNPay
          </li>
        </ul>
        <strong>***Mọi thắc mắc xin liên hệ CSKH 1900.63.64.69</strong>
      </div>
    </div>
  );
}

export default Section2;
