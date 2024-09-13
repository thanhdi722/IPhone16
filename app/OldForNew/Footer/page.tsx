/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";
function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle function to change visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <section
        className="containerFooter ldp-dcontent px-3 mb-4"
        style={{ textAlign: "left" }}
      >
        <h2 className="ldp-title mb-2 mb-md-3 containerFooterTitle">
          Câu hỏi thường gặp
        </h2>
        <div
          className="accordion accordion-flush ldp-faq-collapse"
          id="accordionFlushFaqs"
        >
          <div className="accordion-item">
            <p className="accordion-header"></p>
            <div
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushFaqs"
              id="collapseFaq284"
            >
              <div className="accordion-body dcontent"></div>
            </div>
            <h5
              onClick={toggleVisibility}
              style={{}}
              className="containerFooterText "
            >
              {isVisible
                ? " Đăng kí sớm khách hàng nhận được quyền lợi gì?"
                : " Đăng kí sớm khách hàng nhận được quyền lợi gì? "}
              <i
                className={`iconChevRon fas fa-chevron-${
                  isVisible ? "up" : "down"
                }`}
              ></i>
            </h5>

            {/* Conditional rendering of the store list */}
            {isVisible && (
              <div style={{ fontWeight: "500" }}>
                <p>
                  Quý khách để lại thông tin ở thời điểm hiện tại sẽ nhận được
                  tin nhắn Zalo báo có hàng về, biết được Minh Tuấn về những sản
                  phẩm nào để lên đơn mua hàng và kèm theo là bộ quà tặng, ưu
                  đãi thanh toán như sau:
                </p>
                <ul>
                  <li>&nbsp;- Voucher trị giá lên đến 2,35 TRIỆU.</li>
                  <li>
                    &nbsp;- Cơ hội nhận THÊM combo quà tặng trị giá đến 1,2
                    TRIỆU.
                  </li>
                  <li>
                    &nbsp;- Giảm 1 TRIỆU cho khách hàng mới mở thẻ tín dụng
                    VPbank tại Minh Tuấn mobile (SL có hạn)
                  </li>
                  <li>
                    &nbsp;- Giảm 700K khi thanh toán trả góp&nbsp;từ 15 TRIỆU
                    bằng thẻ tín dụng Techcombank qua Payoo (SL có hạn)
                  </li>
                  <li>
                    &nbsp;- Giảm 500K khi thanh toán từ 20 TRIỆU qua Zalopay (SL
                    có hạn)
                  </li>
                  <li>
                    &nbsp;- Trợ giá Thu Cũ - Đổi Mới đến 95% - mức trợ giá cực
                    kỳ cao.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <footer className="ldg-empty-footer">
        <div className="container">
          <div className="row">
            <section className="col-12 col-md">
              <p className="footer__title mb-3 text-red">
                Liên kết với Bạch Long Mobile
              </p>

              <ul className="footer_social">
                <li>
                  <a href="https://zalo.me/1806298144758361913" target="_blank">
                    <img
                      src="https://minhtuanmobile.com/assets/front/img/icon-zalo.png"
                      alt="ZALO Bạch Long Mobile"
                      className=""
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/mobilebachlong"
                    target="_blank"
                    className="bg-fb"
                    aria-label="Social"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/mobilebachlong"
                    target="_blank"
                    className="bg-youtube"
                    aria-label="Social"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/bachlong.mobile/"
                    target="_blank"
                    className="bg-instagram"
                    aria-label="Social"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.tiktok.com/@bachlongmobile_official?_t=8ntcB4HTdCR&amp;_r=1"
                    target="_blank"
                    className="bg-tiktok"
                    aria-label="Social"
                  >
                    <i className="fab fa-tiktok"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://bachlongmobile.com/"
                    target="_blank"
                    className="bachlongmobiles footer_social_icon_bachlongmobile"
                  >
                    <img
                      src="https://minhtuanmobile.com/assets/front/img/icon-header-store-2.png"
                      alt="Bạch Long Mobile"
                      width="85"
                      height="32"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="http://online.gov.vn/Home/WebDetails/97306"
                    target="_blank"
                    className="bachlongmobile"
                    aria-label="Registered"
                  >
                    <img
                      src="https://bachlongmobile.com/_next/image?url=%2Fassets%2Fimages%2Flogo%2Flogo-bo-cong-thuong.png&w=256&q=75"
                      alt="bachlongmobile.com"
                      className="Footer-Images"
                      width={85}
                    />
                  </a>
                </li>
              </ul>
            </section>
            <section className="col-12 col-md-6">
              <div className="dcontent dg-empty-footer-dcontent">
                <p>Hướng dẫn đăng ký thông tin&nbsp;và nhận hàng sớm</p>

                <p>
                  <a href="https://bachlongmobile.com/" target="_blank">
                    https://bachlongmobile.com/iphone-16-series
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
