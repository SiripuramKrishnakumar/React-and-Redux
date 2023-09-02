// import React, { Fragment, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";

// const Counter = () => {
//   const inputVal = useRef();
//   const dispatch = useDispatch();

//   const counterVal = useSelector((state) => state.counter);

//   const incrementHandler = () => {
//     dispatch({ type: "Increment", val: inputVal.current.value });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "Decrement", val: inputVal.current.value });
//   };

//   return (
//     <Fragment>
//       <br />
//       <div className="row">
//         <div className="col-auto">
//           <div
//             class="btn-toolbar"
//             role="toolbar"
//             aria-label="Toolbar with button groups"
//           >
//             <div class="btn-group" role="group" aria-label="First group">
//               <input type="number" ref={inputVal} className="form-control" />
//             </div>
//             &nbsp;&nbsp;
//             <div class="btn-group" role="group" aria-label="Second group">
//               <button
//                 type="button"
//                 class="btn btn-success"
//                 onClick={decrementHandler}
//               >
//                 <span style={{ color: "black" }}>-</span>
//               </button>
//             </div>
//             &nbsp;&nbsp;
//             <div class="btn-group" role="group" aria-label="Third group">
//               <button
//                 type="button"
//                 class="btn btn-success"
//                 onClick={incrementHandler}
//               >
//                 <span style={{ color: "black" }}>+</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <span class="badge rounded-pill text-bg-success">
//             <strong style={{ color: "red" }}> {counterVal} </strong>
//           </span>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Counter;

// Redux with redux-toolkit

import React, { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/counterValSlice";

const Counter = () => {
  const [inputVal, setInputValue] = useState(1);
  const dispatch = useDispatch();

  const counterItem = useSelector((state) => state.counter.counterVal);

  const incrementHandler = () => {
    if (parseInt(inputVal) > 0) {
      dispatch(counterActions.incrementCounterVal(parseInt(inputVal)));
    }
  };

  const decrementHandler = () => {
    if (parseInt(inputVal) > 0) {
      dispatch(counterActions.decrementCounterVal(parseInt(inputVal)));
    }
  };

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <center>
        <div>
        <h2 style={{color:'green'}}> This is Redux Example </h2>
        </div>
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-auto">
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group" role="group" aria-label="First group">
                <input
                  type="number"
                  onChange={(event) => setInputValue(event.target.value)}
                  value={inputVal}
                  className="form-control"
                />
              </div>
              &nbsp;&nbsp;
              <div class="btn-group" role="group" aria-label="Second group">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={decrementHandler}
                >
                  <span style={{ color: "black" }}>-</span>
                </button>
              </div>
              &nbsp;&nbsp;
              <div class="btn-group" role="group" aria-label="Third group">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={incrementHandler}
                >
                  <span style={{ color: "black" }}>+</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <span class="badge rounded-pill text-bg-success">
              <strong style={{ color: "red" }}> {counterItem} </strong>
            </span>
          </div>
        </div>
      </center>
    </Fragment>
  );
};

export default Counter;
