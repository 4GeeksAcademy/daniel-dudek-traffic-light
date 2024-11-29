import React from "react";
import "./Style.css";

const Light = ({ mapColor, changeColor, activeColor }) => {
  const isActive = activeColor === mapColor;

  return (
    <div
      className={`light ${mapColor} ${isActive ? "active" : ""}`}
      onClick={() => changeColor(mapColor)}
      style={{ border: isActive ? "5px solid white" : "none" }}
    ></div>
  );
};

export default Light;
