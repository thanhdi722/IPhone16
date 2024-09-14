"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImagesInfoIP16 from "@/app/Images/imagesInfoIp16.png";
import InfoIP16Plus from "@/app/Images/info-iphone-16-16-plus.png";
import style from "./Section3.module.css";
function Section3() {
  const [activeButton, setActiveButton] = useState<number>(1); // Default button 1

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  return (
    <div style={{ backgroundColor: "#1d1d1f" }}>
      <div className={style.Container}>
        <div className={style.tabs_wrapper}>
          <button
            className={`${style.tab_item} ${style.button}`}
            onClick={() => handleButtonClick(1)}
            style={{
              backgroundColor: activeButton === 1 ? "White" : "black",
              color: activeButton === 1 ? "black" : "white",
            }}
          >
            iPhone 16 Pro
          </button>
          <button
            className={`${style.tab_item} ${style.button}`}
            onClick={() => handleButtonClick(2)}
            style={{
              backgroundColor: activeButton === 2 ? "white" : "black",
              color: activeButton === 2 ? "black" : "white",
            }}
          >
            iPhone 16
          </button>
        </div>
        {activeButton === 1 && (
          <Image
            src={ImagesInfoIP16}
            alt="Description of image"
            layout="responsive"
          />
        )}
        {activeButton === 2 && (
          <Image
            src={InfoIP16Plus}
            alt="Description of image"
            layout="responsive"
          />
        )}
      </div>
    </div>
  );
}

export default Section3;
