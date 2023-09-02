import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GetPersonDetail = () => {
  const [persons, setPeople] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const params = useParams();

  console.log(params, "Detail Id");

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.py4e.com/api/people/", {
        method: "Get",
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      //throw new Error('Example Error.');
      setPeople(
        data.results
          .filter((i) => i.name === params.id)
          .map((person) => {
            return { id: Math.random(), name: person.name };
          })
      );
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <center>
        <h2 style={{ color: "green" }}>Routing with Parameter.</h2>
        {isLoading && <p> Loading......</p>}
        <br />
        {persons.length > 0 && (
          <div className="card" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
              {persons.map((person) => {
                return (
                  <li key={person.name} className="list-group-item">
                    {person.name}
                  </li>
                );
              })}
            </ul>
            <div className="card-footer">
              <Link className="btn btn-success" to=".." relative="path">
                Back
              </Link>
            </div>
          </div>
        )}
      </center>
    </React.Fragment>
  );
};

export default GetPersonDetail;
