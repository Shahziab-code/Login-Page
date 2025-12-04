import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = () => {
  const FAKE_USER = {
    name: "user",
    password: "1234",
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const enteredUser = user.trim().toLowerCase();
  const enteredPassword = password.trim().toLowerCase();

  const realUser = FAKE_USER.name.trim().toLowerCase();
  const realPassword = FAKE_USER.password.trim().toLowerCase();

    const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/Dashboard");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredUser === realUser && enteredPassword === realPassword) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/Dashboard");
    } else if (enteredUser !== realUser && enteredPassword !== realPassword) {
      setError("Invalid Username and Password")
      setUser("");
      setPassword("");
    } else if (enteredUser !== realUser) {
      setError("Invalid Username");
      setUser("");
      setPassword("");
    } else if (enteredPassword !== realPassword) {
      setError("Invalid Password");
      setUser("");
      setPassword("");
    }
    setUser("");
    setPassword("");
  };
  return (
    <div>
      <div className="mainContainer">
        <div className="Container">
          <h2 className="loginHead">Login Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                className="loginInput"
                type="text"
                placeholder="Username"
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="forget">Froget Password?</span>
              <button className="loginBtn" type="submit">
                Login
              </button>
              <div>
                <span>Don't have an account?</span>
                <a className="register" href="#">
                  {" "}
                  Register
                </a>
              </div>
            </div>
          </form>
          {error && (
            <div className="popupOverlay">
              <div className="popupBox">
                <p>{error}</p>
                <button onClick={() => setError("")} >Ok</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
