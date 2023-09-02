import React from "react";

const Bus = (props) => {
  return (
    <React.Fragment>
      <span
          class="badge rounded-pill text-bg-success"
        >
          I am from props component and this is my prop value: {props.name}
        </span>
    </React.Fragment>
  );
};

export default Bus;
