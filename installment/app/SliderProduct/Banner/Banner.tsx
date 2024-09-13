/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./Banner.module.css";
import React from "react";
import banner from "@/app/Images/HeaderLP-Desktop-ROI-1920x600.png";
import bannerMB from "@/app/Images/Banner-MB.png";
import Image from "next/image";
import { message } from "antd";

const Banner: React.FC = () => {
  const handleClick = () => {
    message.info("Hi");
  };
  const handleClick1 = () => {
    message.info("Ha");
  };

  return (
    <div>
      <Image
        src={banner}
        alt="Description of image"
        layout="responsive"
        className={style.bannerPC}
      />
      <Image
        src={bannerMB}
        alt="Description of image"
        layout="responsive"
        className={style.bannerMB}
      />
      <div className={style.group_btn} style={{ zIndex: 99 }}>
        <a className={style.btn_open_modal} onClick={handleClick}></a>
        <button className={style.btn_scroll} onClick={handleClick1}></button>
      </div>
      <div>
        <div
          id="navigationBar"
          className="bannerTopHead"
          style={{ height: "50px", backgroundColor: "#313131" }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
