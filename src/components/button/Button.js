import React from "react";

// const btnStyle = {
//   margin: "20px"
// };

const Button = props => (
  <button onClick={props.clicked} style={props.style}>
    {props.name}
  </button>
);

export default Button;
