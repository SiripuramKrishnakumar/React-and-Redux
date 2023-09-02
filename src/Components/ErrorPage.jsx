import { Link } from "react-router-dom";
import React from "react";

const ErrorPage = () => {
  return (
    <React.Fragment>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <center>
        <h1 style={{color:'green'}}>Custom Error Page.</h1>
        <Link className="btn btn-success" to="/">
          Click here to go Home Page.
        </Link>
      </center>
    </React.Fragment>
  );
};

export default ErrorPage;
