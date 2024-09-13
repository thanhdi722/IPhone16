import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Banner from "./Banner/Banner";
import NavBar from "./NavBar/NavBar";

function page() {
  return (
    <div>
      <Banner />
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default page;
