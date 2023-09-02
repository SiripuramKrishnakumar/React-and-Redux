import { Link } from "react-router-dom";
import React from "react";

const PeopleList = (props) => {
    const loadedPersons = props.people;
  return (
    <React.Fragment>
      {loadedPersons.length > 0 && (
        <div className="card" style={{ width: "25rem" }}>
          <ul className="list-group list-group-flush">
            {loadedPersons.map((person) => {
              return (
                <li className="list-group-item">
                  {person.name} &nbsp; &nbsp;
                  <Link
                    className="btn btn-success"
                    to={`/people/${person.name}`}
                  >
                    {" "}
                    Detail{" "}
                  </Link>
                  &nbsp; &nbsp;
                  <Link
                    className="btn btn-success"
                    to={`/personEdit/${person.name}`}
                  >
                    {" "}
                    Edit{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};


export default PeopleList;