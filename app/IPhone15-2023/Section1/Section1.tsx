import React from "react";
import banner from "@/app/Images/head-dathang-ip15sr-1920x600-new-220923-15.png";
import bannerMB from "@/app/Images/head-dathang-ip15sr-900x600-new-220923-15.png";
import Image from "next/image";
import style from "./Section.module.css";
export default function Section1() {
  return (
    <div className={style.section1}>
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
    </div>
  );
}
