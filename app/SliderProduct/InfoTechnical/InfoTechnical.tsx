import React from "react";
import style from "./InfoTechnical.module.css";
import InfoTechnicalComponent from "@/app/Component/InfoTechnicalComponent/InfoTechnicalComponent";
import iphone16Green from "../../Images/IP16_Green.png";
import iphone16Black from "../../Images/IP16_Black.png";
import iphone16White from "../../Images/IP16_Whitte.png";
import iphone16Pink from "../../Images/IP16_Pink.png";
import iphone16Blue from "../../Images/iphone_16_plus_xanh.png";
import iphone16Titan from "../../Images/iphone-16-pro-titan-tu-nhien.png";
import iphone16Desert from "../../Images/iPhone_16_Pro_Desert_Titanium_Pure_Back_iPhone_16_Pro_Desert.png";
import Image from "next/image";
import bang_gia from "@/app/images/bang-gia.png";
import { StaticImageData } from "next/image";

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
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Desert", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan", colorCode: "rgb(250, 235, 215)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
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
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Desert", colorCode: "rgb(255, 218, 185)" },
        { name: "Titan", colorCode: "rgb(250, 235, 215)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
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
        Xanh: iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh", colorCode: "rgb(72, 118, 255)" },
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
        Xanh: iphone16Blue,
      },
      capacities: ["512GB", "256GB", "128GB"],
      colors: [
        { name: "Đen", colorCode: "rgb(60, 64, 66)" },
        { name: "Trắng", colorCode: "rgb(251, 247, 244)" },
        { name: "Xanh Mòng Két", colorCode: "rgb(176, 212, 210)" },
        { name: "Hồng", colorCode: "rgb(255, 110, 180)" },
        { name: "Xanh", colorCode: "rgb(72, 118, 255)" },
      ],
      productLink:
        "/dtdd/iphone-16-pro-max?m=2&amp;gid=1&amp;pId=329136&amp;strcode=0131491004227",
    },
  ];

  return (
    <div className={style.infoTechnical}>
      <Image
        src={bang_gia}
        alt=""
        style={{ display: "block", margin: "auto" }}
      />
      <div className={style.productList}>
        {products.map((product, index) => (
          <div key={index} style={{ width: "20%", display: "inline-block" }}>
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
    </div>
  );
}
