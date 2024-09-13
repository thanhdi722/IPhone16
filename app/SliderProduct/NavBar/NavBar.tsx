"use client";
import React, { useState } from "react";
import style from "./NavBar.module.css";

function NavBar() {
  const [activeButton, setActiveButton] = useState<number>(1); // Default button 1

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  return (
    <div
      className={style.navbar_container}
      style={{ marginTop: "35px", backgroundColor: "#ffff" }}
    >
      <div className={style.tabs_wrapper}>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 1 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Quà tặng
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 2 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Thu củ đổi mới
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 3 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Trả góp 0%
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 4 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(4)}
        >
          Tiện ích
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 5 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(5)}
        >
          Lỗi đổi mới
        </button>
        <button
          className={`${style.tab_item} ${style.button} ${
            activeButton === 6 ? style.active : ""
          }`}
          onClick={() => handleButtonClick(6)}
        >
          Hệ sinh thái Apple
        </button>
      </div>
    </div>
  );
}

export default NavBar;
