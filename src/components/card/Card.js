import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = props => (
  <div className="card" key={props.id}>
    <img
      src={"https://image.tmdb.org/t/p/w500/" + props.poster}
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
      <li className="list-group-item">
        <span className="text-info">Genre Id </span>
        {props.genre}
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
