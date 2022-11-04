import React from "react";
import I4G from "../assets/I4G.png";
import zuri from "../assets/Zuri.png";

const Footer = () => {
  return (
    <footer className="text-left p-5  ">
      <hr />
      <div className="p-5  md:flex justify-between">
        <img src={I4G} alt="" />
        <p>HNG Internshhip 9 Frontend task</p>
        <img src={zuri} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
