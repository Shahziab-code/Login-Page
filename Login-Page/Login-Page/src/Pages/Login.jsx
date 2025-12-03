import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = () => {
  const FAKE_USER = {
    name: "user",
    password: "1234",
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === FAKE_USER.username && password === FAKE_USER.password) {
      console.log("Login Successful");
        // navigate("/");

        setUser("");
        setPassword("");
    } else if (user !== FAKE_USER.username && password !== FAKE_USER.password) {
        setError("Invalid Username and Password");
        setUser("");
        setPassword("");
    } else if (user !== FAKE_USER.username) {
        setError("Invalid Username");
        setUser("");
        setPassword("");
    } else if (password !== FAKE_USER.password) {
        setError("Invalid Password");
        setUser("");
        setPassword("");
    }
  };
  return (
    <div>
      <div className="mainContainer">
        <div className="Container">
          <h2 className="loginHead">Login Page</h2>
          <form>
            <div className="inputBox">
              <input
                className="loginInput"
                type="text"
                placeholder="Username"
                required
              />
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                required
              />
              <span className="forget">Froget Password?</span>
              <button className="loginBtn" value="submit" onClick={handleSubmit}>Login</button>
            </div>
          </form>
          <div>
            <span>Don't have an account?</span>
            <a className="register" href="#">
              {" "}
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
