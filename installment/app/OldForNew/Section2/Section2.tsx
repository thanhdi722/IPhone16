/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./Section2.css";
import { Carousel } from "antd";
import CardProduct from "@/app/Component/CardProduct/CardProduct";

const Section2: React.FC = () => {
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
    <div className="OldForNew-Section2">
      <div className="OldForNew-Section2-Container">
        <div className="title-loai-pk" style={{ marginTop: "0" }}>
          <span>Bao da/Ốp lưng giảm đến 80%</span>
        </div>
        <div className="OldForNew-Section2-tab">
          <div
            className="OldForNew-Section2-tabItem"
            onClick={() => handleButtonClick(1)}
            style={{
              backgroundColor: activeButton === 1 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-APPLE.png"
              alt={`logo`}
            />
          </div>{" "}
          <div
            className="OldForNew-Section2-tabItem"
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: activeButton === 2 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-SAMSUNG.png"
              alt={`logo`}
            />
          </div>{" "}
          <div
            className="OldForNew-Section2-tabItem"
            onClick={() => handleButtonClick(3)}
            style={{
              backgroundColor: activeButton === 3 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-SPIGEN.png"
              alt={`logo`}
            />
          </div>{" "}
          <div
            className="OldForNew-Section2-tabItem"
            onClick={() => handleButtonClick(4)}
            style={{
              backgroundColor: activeButton === 4 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-MIPOW.png"
              alt={`logo`}
            />
          </div>
          <div
            className="OldForNew-Section2-tabItem"
            onClick={() => handleButtonClick(5)}
            style={{
              backgroundColor: activeButton === 5 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-UNIQ.png"
              alt={`logo`}
            />
          </div>
          <div
            className="OldForNew-Section2-tabItem"
            onClick={() => handleButtonClick(6)}
            style={{
              backgroundColor: activeButton === 6 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-ZAGG.png"
              alt={`logo`}
            />
          </div>
          <div
            className="OldForNew-Section2-tabItem"
            onClick={() => handleButtonClick(7)}
            style={{
              backgroundColor: activeButton === 7 ? "#fff200" : "white",
            }}
          >
            <img
              src="https://bachlongmobile.com/bnews/wp-content/uploads/2022/12/LOGO-GEAR4.png"
              alt={`logo`}
            />
          </div>
          <div
            className="OldForNew-Section2-tabItemText"
            onClick={() => handleButtonClick(8)}
            style={{
              backgroundColor: activeButton === 8 ? "#fff200" : "white",
              wordBreak: "break-word",
            }}
          >
            Giá thấp tới cao
          </div>
        </div>
        <div className="OldForNew-Section2-ItemSlider">
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
      </div>
    </div>
  );
};

export default Section2;
