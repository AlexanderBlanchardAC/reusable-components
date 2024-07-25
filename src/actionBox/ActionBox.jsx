import React, { useState } from "react";
import "./actionBox.css";

const ActionBox = () => {
  const [actionBoxDisplay, setActionBoxDisplay] = useState("main");

  const toggleBoxDisplay = () => {
    if (actionBoxDisplay == "main") {
      setActionBoxDisplay("back");
    } else {
      setActionBoxDisplay("main");
    }
  };

  return (
    <div className="action-box">
      {actionBoxDisplay == "main" ? (
        <div className="inner">
          <h1>Info</h1>
          <p>I am some info, for more...</p>
          <button onClick={toggleBoxDisplay}>More</button>
        </div>
      ) : (
        <div className="inner-two">
          <p>Some other text</p>
          <button onClick={toggleBoxDisplay}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ActionBox;
