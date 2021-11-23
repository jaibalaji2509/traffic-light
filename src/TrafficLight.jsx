import Light from "./Light";
import React, { useState, useEffect } from "react";

const lightDurations = [3000, 4000, 2000];

const TrafficLight = ({ initialValue }) => {
  const [jaiBalaji, setJaiBalaji] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setJaiBalaji((jaiBalaji + 1) % 3);
    }, lightDurations[jaiBalaji]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="traffic-light">
      <Light color="#f00" active={jaiBalaji === 0} />
      <Light color="#ff0" active={jaiBalaji === 2} />
      <Light color="#0c0" active={jaiBalaji === 1} />
    </div>
  );
};

export default TrafficLight;
