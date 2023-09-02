import React, { Suspense } from "react";
import { Await, useLoaderData, defer } from "react-router-dom";
import PeopleList from "./PeopleList";
import Loader from "../Utils/Loader";
const GetAsyncRequest = () => {
  // Post call

  // const submitData = async () => {
  //   var response = await fetch("someUrl",{
  //     method: 'POST',
  //     body: JSON.stringify({"someObject" : 1}),
  //     headers:{
  //       "key":"value",
  //       "Content-Type":"application/json"
  //     }
  //   });

  //   var data = response.json();
  //   console.log(data);
  // }

  const { data } = useLoaderData();
  return (
    <center>
      <h2 style={{ color: "green" }}>
        Asynchronous Request with Use Effect & defer Example.
      </h2>
      <br />
      <Suspense
        fallback={
         <Loader/>
        }
      >
        <Await resolve={data}>
          {(loadedPersons) => {
            console.log(loadedPersons, "persons");
            return <PeopleList people={loadedPersons} />;
          }}
        </Await>
      </Suspense>
    </center>
  );
};

const peopleLoaderData = async () => {
  const response = await fetch("https://swapi.py4e.com/api/people/", {
    method: "Get",
  });
  console.log("sleeping start....");

  const data = await response.json();

  await sleep(1000); // to test defer feature

  if (!response.ok) {
    throw new Error("Something went wrong.");
  } else {
    console.log("sleeping end....");
    return data.results;
  }
};

async function sleep(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

export function loaderPeopleData() {
  return defer({
    data: peopleLoaderData(),
  });
}

export default GetAsyncRequest;
