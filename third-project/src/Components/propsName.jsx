import React from "react";

const Card = ({img}) => {
  return (
    <div className="card">
      <User
        img={img}
        name="Ahmed"
        age={15}
        color="black"
        desc="I am a React developer"
        btnText="View Profile"
      />
    </div>
  );
};

const User = ({ name, age, color, img, desc, btnText }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h1 style={{ color: color }}>{name}</h1>
      <h2 style={{ color: color }}>{age}</h2>
      <p>{desc}</p>
      <button>{btnText}</button>
    </div>
  );
};

export { Card, User };
