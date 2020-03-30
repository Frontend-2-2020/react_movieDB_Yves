import React from "react";
import { URL_poster } from "../../config/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/images/css/main.css";

const styleFont = { fontFamily: "Playfair Display serif", fontWeight: "bold" };

//receiving the props from Detail
const Detailcard = props => (
  <div className="jumbotron">
    <img src={URL_poster + "w1280" + props.bdp} alt="bgi" />
    <h1 className="display-4">{props.title}</h1>
    <p className="lead">
      <span style={styleFont}>Budget: USD$</span>
      {props.budget}
    </p>

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

    <ul>
      <li className="list-group-item m-auto">
        <h1 style={styleFont}>Genre:</h1>
        {props.gen}
      </li>

      <li className="list-group-item m-auto">
        <h1 style={styleFont}>Production Houses:</h1>
        {props.prod}
      </li>
    </ul>
  </div>
);

export default Detailcard;
