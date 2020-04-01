import React from "react";
import { URL_poster } from "../../config/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/images/css/main.css";

//Providing some basic inline style
const styleFont = {
  fontFamily: "Playfair Display serif",
  fontWeight: "bold",
  paddingLeft: "0"
};
const backdrop = {
  width: "100%",
  boxShadow: "0 6px 10px rgb(71, 65, 65)",
  borderRadius: "8px"
};

//Receiving the props from Detail
const Detailcard = props => (
  <div className="jumbotron">
    <img src={URL_poster + "w1280" + props.bdp} alt="bgi" style={backdrop} />
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">
      <span style={styleFont}>Budget: USD $</span>
      {props.budget}
    </p>

    {/*Received props form Detail.js to output the number of stars per vote  */}
    <p>
      <span style={styleFont}>Rated: </span>
      {props.actualvotes}
      {props.restvotes}
    </p>
    <p>
      <span style={styleFont}>Released on</span> {props.release}
    </p>
    <hr className="my-4" />
    <p>{props.overview}</p>

    <ul style={styleFont}>
      <li className="list-group-item m-auto">
        <h1>Genre:</h1>
        {props.gen}
      </li>

      <li className="list-group-item m-auto">
        <h1>Production Houses:</h1>
        {props.prod}
      </li>
    </ul>
  </div>
);

export default Detailcard;
