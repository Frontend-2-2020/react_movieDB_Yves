import React from "react";
import { Link } from "react-router-dom";
//Component will show an error when there is an invalid url
const Fail = () => {
  const style = { textAlign: "center", marginTop: "20px" };
  return (
    <div style={style}>
      <h1>Error :Request failed with status code 404</h1>
      <p>The page you are looking for does not excist</p>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
};

export default Fail;
