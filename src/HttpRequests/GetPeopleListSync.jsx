import React, { useState } from "react";

const GetRequest = () => {
  const [persons, setPeople] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.py4e.com/api/people/", {
      method: "Get",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPeople(
          data.results.map((person) => {
            return { key: Math.random(), name: person.name };
          })
        );
      });
  };

  return (
    <React.Fragment>
      <div>
        <button className="btn btn-success" onClick={fetchMoviesHandler}>
          People List
        </button>
      </div>
      <br />
      {persons.length > 0 && (
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            {persons.map((person) => {
              return <li className="list-group-item">{person.name}</li>;
            })}
          </ul>
          <div className="card-footer">
            <button className="btn btn-success" onClick={() => setPeople([])}>
              Clear
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default GetRequest;
