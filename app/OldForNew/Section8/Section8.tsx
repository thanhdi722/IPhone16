/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./Section8.css";
import { Carousel } from "antd";
import CardProduct from "@/app/Component/CardProduct/CardProduct";

const Section8: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: true,
    slidesToShow: 5,
    rows: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="OldForNew-Section8">
      <div className="OldForNew-Section8-Container">
        <div className="title-loai-pk" style={{ marginTop: "0" }}>
          <span>Phụ kiện công nghệ giảm đến 72%</span>
        </div>
        <div className="OldForNew-Section8-tab">
          <div
            className="OldForNew-Section8-tabItem"
            onClick={() => handleButtonClick(1)}
            style={{
              backgroundColor: activeButton === 1 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-SAMSUNG.png"
              alt={`logo`}
            />
          </div>{" "}
          <div
            className="OldForNew-Section8-tabItem"
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: activeButton === 2 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2023/10/icon-tplink-new-131023.png"
              alt={`logo`}
            />
          </div>{" "}
          <div
            className="OldForNew-Section8-tabItemText"
            onClick={() => handleButtonClick(3)}
            style={{
              backgroundColor: activeButton === 3 ? "#fff200" : "white",
            }}
          >
            Giá thấp tới cao
          </div>
        </div>
        <div className="OldForNew-Section8-ItemSlider">
          {activeButton === 1 && (
            <Carousel {...settings} infinite={true} dots={false}>
              {Array(16)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
          {activeButton === 2 && (
            <Carousel {...settings} infinite={true} autoplay dots={false}>
              {Array(16)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
          {activeButton === 3 && (
            <Carousel {...settings} infinite={true} autoplay dots={false}>
              {Array(16)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
          {activeButton === 4 && (
            <Carousel {...settings} infinite={true} autoplay dots={false}>
              {Array(16)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
          {activeButton === 5 && (
            <Carousel {...settings} infinite={true} autoplay dots={false}>
              {Array(16)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
          {activeButton === 6 && (
            <Carousel {...settings} infinite={true} autoplay dots={false}>
              {Array(16)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
          {activeButton === 7 && (
            <Carousel {...settings} infinite={true} autoplay dots={false}>
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
          {activeButton === 8 && (
            <Carousel {...settings} infinite={true} autoplay dots={false}>
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <CardProduct key={index} />
                ))}
            </Carousel>
          )}
        </div>
        <div style={{ margin: "10px 0" }}>
          <p style={{ textAlign: "right", width: "95%" }}>
            Mọi chi tiết thắc mắc, quý khách đừng ngần ngại liên hệ ngay đường
            dây nóng <strong style={{ color: "red" }}>1900.63.64.69</strong> để
            được tư vấn cụ thể.
          </p>
          <p style={{ textAlign: "right", width: "99%" }}>
            <strong>Bạch Long Mobile</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section8;
