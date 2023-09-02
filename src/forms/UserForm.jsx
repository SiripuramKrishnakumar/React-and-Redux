import { useNavigate } from "react-router-dom";

const UserForm = (props ) => {
 
  const submitHandler = () => {}

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/counter');
  }
  return (
    <form onSubmit={submitHandler}>
      <center>
        <label>
          <strong style={{ color: "green" }}>User Name.</strong>
        </label>
        <input className="form-control" type="text"></input>
        <br/>
        <button className="btn btn-success" onClick={navigateHandler}>
          Click here navigate to Counter page with useNavigate.
        </button>
      </center>
    </form>
  );
};

export default UserForm;
