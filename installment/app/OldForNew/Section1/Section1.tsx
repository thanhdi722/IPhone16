/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import "./Section1.css";
import { Carousel } from "antd";
import CardCombo from "@/app/Component/CardCombo/CardCombo";
import ComboModal from "@/app/Component/ProductSelectionModal/ProductSelectionModal"; // Import the ComboModal component

interface Product {
  value: string;
  label: string;
  description: string;
  image: string;
  price: string;
  oldPrice: string;
}

const Section1: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const products: Product[] = [
    {
      value: "product1",
      label: "Cường Lực Chống Nhìn Trộm Mipow Kingbull iPhone 15 - BJ513",
      description: "Giá: 340.000đ",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      price: "340.000đ",
      oldPrice: "590.000đ",
    },
    {
      value: "product2",
      label: "Cường Lực Chống Nhìn Trộm Mipow Kingbull iPhone 15 Plus",
      description: "Giá: 320.000đ",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      price: "320.000đ",
      oldPrice: "550.000đ",
    },
    {
      value: "product3",
      label: "Cường Lực Chố5345345345",
      description: "Giá: 320.000đ",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
      price: "320.000đ",
      oldPrice: "550.000đ",
    },
  ];

  return (
    <div>
      <img
        className="OldForNew-Section1-bg1"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/130824-HEAD-COMBO-PK-BTS-FINAL-1920.png"
        alt="Background large"
        width="100%"
      />
      <img
        className="OldForNew-Section1-bg2"
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/130824-HEAD-COMBO-PK-BTS-FINAL-900.png"
        alt="Background small"
        width="100%"
      />

      <div
        className=""
        style={{
          display: "flex",
          gap: "10px",
          margin: "auto",
          justifyContent: "center",
          padding: "20px 0px",
        }}
      >
        <div className="OldForNew-Section1-imageSliderBanner">
          <Carousel autoplay autoplaySpeed={2000} dots={false} arrows={true}>
            <div className="OldForNew-Section1-image">
              <img
                src="https://old.bachlongmobile.com/media/tmp/catalog/product//b/a/banner-pk-apple-1200-040624.png"
                alt=""
                className="OldForNew-Section1-imageItem"
              />
            </div>
            <div className="OldForNew-Section1-image">
              <img
                src="https://old.bachlongmobile.com/media/tmp/catalog/product//b/a/banner-pk-apple-1200-040624.png"
                alt=""
                className="OldForNew-Section1-imageItem"
              />
            </div>
            <div className="OldForNew-Section1-image">
              <img
                src="https://old.bachlongmobile.com/media/tmp/catalog/product//b/a/banner-pk-apple-1200-040624.png"
                alt=""
                className="OldForNew-Section1-imageItem"
              />
            </div>
          </Carousel>
        </div>
        <div className="OldForNew-Section1-imageSliderBanner">
          <Carousel autoplay autoplaySpeed={2000} dots={false} arrows={true}>
            <div className="OldForNew-Section1-image">
              <img
                src="https://old.bachlongmobile.com/media/tmp/catalog/product//b/a/banner-pk-apple-1200-040624.png"
                alt=""
                className="OldForNew-Section1-imageItem"
              />
            </div>
            <div className="OldForNew-Section1-image">
              <img
                src="https://old.bachlongmobile.com/media/tmp/catalog/product//b/a/banner-pk-apple-1200-040624.png"
                alt=""
                className="OldForNew-Section1-imageItem"
              />
            </div>
            <div className="OldForNew-Section1-image">
              <img
                src="https://old.bachlongmobile.com/media/tmp/catalog/product//b/a/banner-pk-apple-1200-040624.png"
                alt=""
                className="OldForNew-Section1-imageItem"
              />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="OldForNew-Section1-CardCombo">
        <div onClick={() => setModalOpen(true)}>
          <CardCombo />
        </div>
        <div onClick={() => setModalOpen(true)}>
          <CardCombo />
        </div>
        <div onClick={() => setModalOpen(true)}>
          <CardCombo />
        </div>
        <div onClick={() => setModalOpen(true)}>
          <CardCombo />
        </div>
      </div>
      <img
        src="https://bachlongmobile.com/bnews/wp-content/uploads/2024/08/130824-TITLE-PK-CH-BTS-FINAL-1200.png"
        alt=""
        className="OldForNew-Section1-banner"
      />
      <ComboModal
        visible={modalOpen}
        onClose={() => setModalOpen(false)}
        products={products}
      />
    </div>
  );
};

export default Section1;
