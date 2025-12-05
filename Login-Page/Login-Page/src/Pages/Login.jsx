import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
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
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/Dashboard");
    }
  }, []);

  const Inputref = useRef(null);

  const focusInput = (e) => {
    if (condition) {
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enteredUser === realUser && enteredPassword === realPassword) {
      localStorage.setItem("userLoggedIn", true);
      navigate("/Dashboard");
    } else if (enteredUser !== realUser && enteredPassword !== realPassword) {
      setError("Invalid Username and Password");
    } else if (enteredUser !== realUser) {
      setError("Invalid Username");
    } else if (enteredPassword !== realPassword) {
      setError("Invalid Password");
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
              <div className="loginInput">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </div>

              <div className="loginInput">
                <input
                 type={showPassword ? "password" : "text"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onClick={() => setShowPassword(!showPassword)}
                  required
                />
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </div>
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
                <button onClick={() => setError("")}>Ok</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
