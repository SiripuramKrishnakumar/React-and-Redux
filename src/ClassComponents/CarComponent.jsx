import React, { Component } from "react";

// const Car = () => {
//     return (
//         <div>
//         <p> This is class component</p>
//       </div>
//     );
// }

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { brand: "ford" };
  }
  render() {
    return (
      <div>
        <span
          class="badge rounded-pill text-bg-success"
        >
          I am from class component.
        </span>
      </div>
    );
  }
}

export default Car;
