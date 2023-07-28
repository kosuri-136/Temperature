

// TemperatureControl.js
import React, { useState } from 'react';

const TemperatureControl = () => {
  const [temperature, setTemperature] = useState(20);

  const incrementTemperature = () => {
    setTemperature(temperature + 1);
  };

  const decrementTemperature = () => {
    setTemperature(temperature - 1);
  };

  const getBackgroundColor = () => {
    let hue;
    if (temperature <= 0) {
      // Light Blue to Thick Blue
      hue = (temperature + 20) * 8; // Transition from light blue to 0°C
    } else if (temperature <= 10) {
      // Thick Blue to Light Blue
      hue = (temperature - 1) * 12 + 160; // Transition from thick blue to 10°C
    } else if (temperature <= 23) {
      // Thick Green to Light Green
      hue = (temperature - 11) * 10 + 80; // Transition from thick green to 23°C
    } else if (temperature <= 37) {
      // Light Green to Thick Orange
      hue = (temperature - 24) * 10 + 50; // Transition from light green to 37°C
    } else {
      // Thick Orange to Red
      hue = (temperature - 38) * 4 + 15; // Transition from thick orange to red (above 37°C)
    }
    const saturation = 100;
    const lightness = 50;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  return (
    <center>
      <div className="temperature-control">
        <center>
          <div className="temperature-circle" style={{ backgroundColor: getBackgroundColor() }}>
            <p className="temperature">{temperature}&deg;C</p>
          </div>
        </center>
        <div className="button-container">
          <div className="increment" onClick={incrementTemperature}>
            +
          </div>
          <div className="decrement" onClick={decrementTemperature}>
            -
          </div>
        </div>
      </div>
    </center>
  );
};

export default TemperatureControl;
