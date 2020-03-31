import React from "react";
import "./Card.css";
import { URL_poster } from "../../config/config";
import { Link } from "react-router-dom";

//adding the props to a bootstrap card
const Card = props => (
  <div className="card" key={props.id}>
    <img
      src={URL_poster + "w500" + props.poster}
      className="card-img-top"
      alt="poster"
    />

    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <span className="text-info">Vote average:</span> {props.average}/10
      </li>
      <li className="list-group-item">
        <span className="text-info">Released on </span> {props.release}
      </li>
    </ul>
    <div className="card-body">
      <Link to={"/detail/" + props.id}>
        <button type="button" className="btn btn-secondary m-1">
          Detail page
        </button>
      </Link>
    </div>
  </div>
);

export default Card;
