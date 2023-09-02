import Alert from "../Components/Alert";
import React, { useRef, useState } from "react";

const ValidationForm = () => {
  const emailVal = useRef();
  const [isEmailValid, setIsEmailIsValid] = useState(true);
  const [isButtonDisabled, setButtonDisable] = useState(true);
  const [showEmailValidAlert, setShowEmailValidAlert] = useState(false);

  const validationHandler = (event) => {
    const val = emailVal.current.value;
    if (!(val.includes("@") && val.includes(".com") && val.trim() !== "")) {
      setIsEmailIsValid(false);
      setButtonDisable(true);
      event.target.focus();
    } else {
      setButtonDisable(false);
      setIsEmailIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setShowEmailValidAlert(true);
  };

  return (
    <React.Fragment>
      {showEmailValidAlert && <Alert text="Email is Valid." />}

      <form className="form" onSubmit={submitHandler}>
        <div className="row g-3">
          <div className="col-auto">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail2"
              value="email@example.com"
            />
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              ref={emailVal}
              onChange={validationHandler}
              onBlur={validationHandler}
            />

            {!isEmailValid && (
              <p style={{ color: "red" }}>Please enter valid Email</p>
            )}
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              disabled={isButtonDisabled}
              className="btn btn-success"
              value="Validate"
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ValidationForm;
