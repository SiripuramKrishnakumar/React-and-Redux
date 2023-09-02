
import spinner from "../images/thumb.png"

const Loader = () => {
    return (
        <div>
        <img
          className="App-loader"
          src={spinner}
          alt="spinner"
          style={{ height: "5%", width: "5%" }}
        />{" "}
        <p style={{ textAlign: "center", color: "greenyellow" }}>
          Loading....
        </p>{" "}
      </div>
    );
}

export default Loader;