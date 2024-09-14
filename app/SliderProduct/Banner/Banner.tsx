/* eslint-disable @next/next/no-img-element */
"use client";
// import style from "./Banner.module.css";
import React from "react";
import banner from "@/app/Images/Head dat hang iPhone 16.png";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div>
      <Image src={banner} alt="Description of image" layout="responsive" />
    </div>
  );
};

export default Banner;
