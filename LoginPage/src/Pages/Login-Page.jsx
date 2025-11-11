import "../App.css";
import ImageView from "../assets/ImageView.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAKE_USER = {
  userName: "admin",
  password: "1234",
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (username === FAKE_USER.userName && password === FAKE_USER.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/Dashboard");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <>
      <div className="Contained">
        <div className="mainContainer">
          <div className="imageView">
            <img src={ImageView} alt="Left Side Image" className="viewImg" />
            <h1>Name</h1>
            <p className="sampleText">
              "Simply all the tools that my team and I need"
            </p>
            <p className="person">Someone</p>
            <p className="Designation">Director of something</p>
          </div>
          <form className="loginView" onSubmit={handleLogin}>
            <div className="loginCard">
              <h1>login to Our Page</h1>
              <p>Sign-up to continue with all tools</p>
              <input
                type="text"
                value={username}
                className="inputField"
                placeholder="Enter User Name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                value={password}
                className="inputField"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="forgetLink">
                <a href="">Forget-Password</a>
              </div>
              <button className="signBtn" type="submit">
                Sign In
              </button>
              <div className="divider">
                <span>Or</span>
              </div>
              <button className="googleBtn">Continue with Google</button>
              <div className="sigUp">
                <p>Continue with New</p>
                <a href="">Sign-up</a>
              </div>
            </div>
          </form>
          {error && (
            <div className="popupOverlay">
              <div className="popupBox">
                <p>{error}</p>
                <button onClick={() => setError("")}>OK</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
