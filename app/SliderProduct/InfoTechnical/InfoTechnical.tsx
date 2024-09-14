import React from "react";
import style from "./InfoTechnical.module.css";
import InfoTechnicalComponent from "@/app/Component/InfoTechnicalComponent/InfoTechnicalComponent";
import iphone16Green from "@/app/Images/iphone16_Green.png";
import iphone16Black from "@/app/Images/iphone16_Black.png";
import iphone16White from "@/app/Images/iphone16_Whitte.png";
import iphone16Pink from "@/app/Images/iphone16_Pink.png";
import iphone16Blue from "@/app/Images/iphone16_blue.png";
import iphone16Titan from "@/app/Images/iphone16_titan.png";
import iphone16Desert from "@/app/Images/iphone16_desert.png";

import { StaticImageData } from "next/image";
import { Carousel } from "antd";
type ProductImage = { [key: string]: StaticImageData };

type Product = {
  productName: string;
  productPrices: { [key: string]: string };
  images: ProductImage;
  capacities: string[];
  colors: Array<{ name: string; colorCode: string }>;
  productLink: string;
};

export default function InfoTechnical() {
  const products: Product[] = [
    {
      productName: "iPhone 16 Pro Max",
      productPrices: {
        "1TB": "45.690.000₫",
        "512GB": "39.690.000₫",
        "256GB": "34.190.000₫",
      },
      images: {
        Đen: iphone16Black,
        Desert: iphone16Desert,
        Titan: iphone16Titan,
        Trắng: iphone16White,
      },
      capacities: ["1TB", "512GB", "256GB"],
      colors: [
        { name: "Màu Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Màu Desert", colorCode: "rgb(255, 218, 185)" },
        { name: "Màu Titan", colorCode: "rgb(250, 235, 215)" },
        { name: "Màu Trắng", colorCode: "rgb(251, 247, 244)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Pro",
      productPrices: {
        "1TB": "42.690.000₫",
        "512GB": "36.690.000₫",
        "256GB": "30.690.000₫",
        "128GB": "27.690.000₫",
      },
      images: {
        Đen: iphone16Black,
        Desert: iphone16Desert,
        Titan: iphone16Titan,
        Trắng: iphone16White,
      },
      capacities: ["1TB", "512GB", "256GB", "128GB"],
      colors: [
        { name: "Màu Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Màu Desert", colorCode: "rgb(255, 218, 185)" },
        { name: "Màu Titan", colorCode: "rgb(250, 235, 215)" },
        { name: "Màu Trắng", colorCode: "rgb(251, 247, 244)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16 Plus",
      productPrices: {
        "512GB": "33.690.000₫",
        "256GB": "27.590.000₫",
        "128GB": "24.690.000₫",
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        Blue: iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Màu Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Màu Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Màu Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Màu Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Màu Blue", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
    {
      productName: "iPhone 16",
      productPrices: {
        "512GB": "30.690.000₫",
        "256GB": "24.690.000₫",
        "128GB": "21.690.000₫",
      },
      images: {
        Đen: iphone16Black,
        Trắng: iphone16White,
        "Xanh Mòng Két": iphone16Green,
        Hồng: iphone16Pink,
        Blue: iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Màu Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Màu Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Màu Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Màu Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Màu Blue", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
  ];
  const settings = {
    slidesToShow: 2,
    rows: 1,
    slidesPerRow: 1,
    dots: false,
  };
  return (
    <div className={style.infoTechnical}>
      <h4 className={style.title}>Bảng Giá Iphone 16 Series Chính Hãng VN/A</h4>
      <div className={style.productList}>
        {products.map((product, index) => (
          <div key={index} className={style.productItem}>
            <InfoTechnicalComponent
              productName={product.productName}
              productPrices={product.productPrices}
              images={product.images}
              capacities={product.capacities}
              colors={product.colors}
              productLink={product.productLink}
            />
          </div>
        ))}
      </div>
      <div className={style.productListMB}>
        <Carousel arrows infinite={false} {...settings}>
          {products.map((product, index) => (
            <div key={index} className={style.productItem}>
              <InfoTechnicalComponent
                productName={product.productName}
                productPrices={product.productPrices}
                images={product.images}
                capacities={product.capacities}
                colors={product.colors}
                productLink={product.productLink}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
