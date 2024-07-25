import React from "react";
import "./header.css";
import Navbar from "../nav/Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container"></div>

      <div className="main-nav">
        <div className="title-container">TITLE</div>
        <div className="nav-container">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
