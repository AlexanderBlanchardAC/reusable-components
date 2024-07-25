import React, { useState } from "react";
import "./main.css";
import ActionBox from "../actionBox/ActionBox";
import Slider from "../slider/Slider";
import ActionBoxOne from "../actionBox/ActionBoxOne";

const Main = () => {
  const [data, setData] = useState(" ");
  const actionBoxOneData = (actionBoxOneData) => {
    setData(actionBoxOneData);
  };

  return (
    <div className="main-container">
      <div className="action-boxes">
        <ActionBoxOne />
        <ActionBox />
        <ActionBox />
        <Slider />
      </div>
      <div className="slider"></div>
    </div>
  );
};

export default Main;
