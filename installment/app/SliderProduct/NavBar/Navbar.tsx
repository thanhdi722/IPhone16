"use client";
import style from "./Navbar.module.css";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div style={{ backgroundColor: "#313131" }}>
      <div className={style.tab_container}>
        <Box className={style.group_tab}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Item One" className={style.tab_item} />
            <Tab label="Item Two" className={style.tab_item} />
            <Tab label="Item Three" className={style.tab_item} />
            <Tab label="Item Four" className={style.tab_item} />
            <Tab label="Item Five" className={style.tab_item} />
            <Tab label="Item Six" className={style.tab_item} />
          </Tabs>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
