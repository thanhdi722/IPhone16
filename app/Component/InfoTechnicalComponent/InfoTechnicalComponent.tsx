"use client";
import React, { useState } from "react";
import style from "./InfoTechnicalComponent.module.css";
import Image from "next/image";
import buttonGetInfo from "@/app/Images/buttonGetInfo.png";
import { StaticImageData } from "next/image";

interface InfoTechnicalProps {
  productName: string;
  productPrices: { [key: string]: string };
  images: { [key: string]: StaticImageData };
  capacities: string[];
  colors: { name: string; colorCode: string }[];
  productLink: string;
}

export default function InfoTechnicalComponent({
  productName,
  productPrices,
  images,
  capacities,
  colors,
  productLink,
}: InfoTechnicalProps) {
  const [activeColor, setActiveColor] = useState(colors[0].name);
  const [activeCapacity, setActiveCapacity] = useState(capacities[0]);

  return (
    <div className={style.infoTechnicalComponent}>
      <div className={style.itemProduct}>
        <div className={style.wrapImg}>
          <Image
            src={images[activeColor]}
            alt={productName}
            title={productName}
          />
        </div>
        <div className={style.productName}>{productName}</div>

        <div className={style.listColorProduct}>
          {colors.map((color) => (
            <div
              key={color.name}
              title={color.name}
              className={color.name === activeColor ? style.active : ""}
              style={{ backgroundColor: color.colorCode }}
              onClick={() => setActiveColor(color.name)}
            ></div>
          ))}
        </div>
        <div className={style.listCapacity}>
          {capacities.map((capacity) => (
            <div
              key={capacity}
              title={capacity}
              className={`${capacity === activeCapacity ? style.active : ""} ${
                !productPrices[capacity] ? style.disabled : ""
              }`}
              onClick={() =>
                productPrices[capacity] && setActiveCapacity(capacity)
              }
            >
              {capacity}
            </div>
          ))}
        </div>
        <div className={style.productPrice}>
          <span>Giá</span> <b>{productPrices[activeCapacity]}</b>
        </div>
        <div className={style.groupButtonMobile}>
          <a href={productLink}>
            <Image src={buttonGetInfo} alt="" style={{ maxWidth: "168px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
