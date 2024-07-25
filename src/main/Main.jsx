import React, { useState } from "react";
import "./main.css";
import ActionBox from "../actionBox/ActionBox";
import Paragraph from "../paragraph/Paragraph";

const Main = () => {
  return (
    <div className="main-container">
      <div className="action-boxes">
        <ActionBox />
        <ActionBox />
        <ActionBox />
      </div>
      <Paragraph />
    </div>
  );
};

export default Main;
