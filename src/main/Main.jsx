import React, { useState } from "react";
import "./main.css";
import ActionBox from "../actionBox/ActionBox";

const Main = () => {
  return (
    <div className="main-container">
      <div className="action-boxes">
        <ActionBox />
        <ActionBox />
        <ActionBox />
      </div>
    </div>
  );
};

export default Main;
