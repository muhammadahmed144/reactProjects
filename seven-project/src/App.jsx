import React, { useState } from "react";
import "./index.css";

const data = [
  "step 1: Learn React🚀💻✍",
  "step 2: Earn from Development💰💵💶",
  "step 3, Invest your Income🏡🗺✈",
];


  const centerDiv = {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F6F6F6",
    height: "60vh",
    width: "70vw",
  };

  const circleStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const listStyle = {
    listStyle: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    backgroundColor: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#606060",
    fontSize: "25px",
    fontWheight: "bold",
  };

  const centerText = {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    padding: "50px",
  };

  const centerButton = {
    display: "flex",
    justifyContent: "space-around",
  };

  const buttonColor = {
    padding: "15px 30px",
    borderRadius: "40px",
    color: "aliceblue",
    backgroundColor: "#6E45F3",
    borderStyle: "none",
    fontSize: "20px",
    cursor: "pointer",
    fontWheight: "bold",
  };

  
const App = () => {
  const [step, setStep] = useState(1);


  return (
    <div style={centerDiv}>
      <div id="fistDiv">
        <ul style={circleStyle}>
          <li
            style={{
              ...listStyle,
              backgroundColor: step == 1 ? "#6E45F3" : "lightgray",
              color: step == 1 ? "aliceblue" : "black",
            }}
          >
            1
          </li>
          <li
            style={{
              ...listStyle,
              backgroundColor: step == 2 ? "#6E45F3" : "lightgray",
              color: step == 2 ? "aliceblue" : "black",
            }}
          >
            2
          </li>
          <li
            style={{
              ...listStyle,
              backgroundColor: step == 3 ? "#6E45F3" : "lightgray",
              color: step == 3 ? "aliceblue" : "black",
            }}
          >
            3
          </li>
        </ul>
      </div>
      <div id="secondDiv" style={centerText}>
        <h1>{data[step - 1]}</h1> 
      </div>
      <div id="btns" style={centerButton}>
        <button style={buttonColor} onClick={ () => {
    step > 1 ? setStep(step - 1) : setStep(3);
  }}>
          Previous
        </button>
        <button style={buttonColor} onClick={() => {
    step < 3 ? setStep(step + 1) : setStep(1);
  }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
