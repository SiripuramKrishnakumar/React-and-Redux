import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";

const EditPerson = () => {
  const person = useRouteLoaderData("personId");

  return (
    <React.Fragment>
      <center>
        <h2 style={{ color: "green" }}>
          Asynchronous Request with Use Effect Example.
        </h2>

        <br />
        {person ? (
          <div className="card" style={{ width: "25rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {person.name} &nbsp; &nbsp;
                <Link className="btn btn-success" to={`/people/${person.name}`}>
                  Detail
                </Link>
                &nbsp; &nbsp;
                <Link
                  className="btn btn-success"
                  to={"/people"}
                  relative="path"
                >
                  Back
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </center>
    </React.Fragment>
  );
};

const personLoaderData = async ({request, params}) => {
  const response = await fetch("https://swapi.py4e.com/api/people/", {
    method: "Get",
  });

  // for POST calls we can access form data with below Func
//   const data = await request.formData();

  const data = await response.json();
  if (!response.ok) {
    throw new Error("Something went wrong.");
  } else {
    return data.results.filter((i) => i.name === params.detailId)[0];
  }
};

export const loaderData = personLoaderData;

export default EditPerson;
