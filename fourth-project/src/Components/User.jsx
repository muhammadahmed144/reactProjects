import React from "react";
const User = (props) => {
  return (
    <div
      style={{
        color: "yellow",
      }}
    >
      {props.name}
    </div>
  );
};

export default User;
