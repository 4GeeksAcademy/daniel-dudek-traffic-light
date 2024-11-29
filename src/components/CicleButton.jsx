import React from "react";
import Button from "react-bootstrap/Button";

const CicleButton = ({ colors, activeColor, setActiveColor }) => {
  const changeColor = () => {
    const currentColorIndex = colors.findIndex(
      (color) => color === activeColor,
    );

    const nextColorIndex = (currentColorIndex + 1) % colors.length;

    setActiveColor(colors[nextColorIndex]);
  };

  return (
    <Button className="mt-3" onClick={changeColor}>
      Change light
    </Button>
  );
};

export default CicleButton;
