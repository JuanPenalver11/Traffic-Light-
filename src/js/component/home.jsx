import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [trafficColor, setTrafficColor] = useState("red");
  return (
    <div className="trafficLight">
      <div
	  onClick={() => setTrafficColor("red")}
        className={"light red" + (trafficColor === "red" ? " glow" : "")}
      ></div>
      <div
	    onClick={() => setTrafficColor("orange")}
        className={"light orange" + (trafficColor === "orange" ? " glow" : "")}
      ></div>
      <div
	    onClick={() => setTrafficColor("green")}
        className={"light green" + (trafficColor === "green" ? " glow" : "")}
      ></div>
    </div>
  );
};

export default Home;
