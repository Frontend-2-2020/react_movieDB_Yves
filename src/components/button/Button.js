import React from "react";

const Button = props => (
  <button onClick={props.clicked} style={props.style}>
    {props.name}
  </button>
);

export default Button;
