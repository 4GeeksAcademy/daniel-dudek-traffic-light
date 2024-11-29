import { useState } from "react";
import Light from "./Light";
import CicleButton from "./CicleButton";
import "./Style.css";
import { Button } from "react-bootstrap";

const TrafficLight = () => {
  const [activeColor, setActiveColor] = useState("");
  const [colors, setColors] = useState(["red", "yellow", "green"]);

  const addPurpleLight = () => {
    if (!colors.includes("purple")) {
      setColors([...colors, "purple"]);
    }
  };

  return (
    <>
      <div className="traffic-light-container">
        <div className="traffic-light">
          {colors.map((color) => (
            <Light
              mapColor={color}
              changeColor={setActiveColor}
              activeColor={activeColor}
            />
          ))}
        </div>
        <div className="button-container">
          <CicleButton
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          ></CicleButton>
          <Button variant="success" onClick={addPurpleLight} className="mt-3">
            Add purple light
          </Button>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
