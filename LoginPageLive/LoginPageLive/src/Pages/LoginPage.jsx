import "./css/Login.css";
import leftImage from "../assets/leftImage.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const Fake_User = {
    name: "user",
    password: "1234",
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const enteredUser = user.trim().toLowerCase();
  const enteredPassword = password.trim().toLowerCase();

  const realUser = Fake_User.name.trim().toLowerCase();
  const realPassword = Fake_User.password.trim().toLowerCase();

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
      setError("Invalid Username and Password");
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
    <>
      <div className="mainContainer">
        <div className="loginContainer">
          <div className="imageSide">
            <img
              src={leftImage}
              alt="Login Illustration"
              className="leftImage"
            />
            <h1 className="logo">Welcome-Logo</h1>
            <h2 className="Director">Director</h2>
            <p className="Company">Company name and something more</p>
          </div>
          <div className="loginSide">
            <form className="inputForm" onSubmit={handleSubmit}>
              <h1>Welcome Back!</h1>
              <p>Lorem ipsum, dolor sit amet consectetur.</p>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className="inputField"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="inputField"
                />
              </div>
              <a href="">Forget Password</a>
              <button type="submit" className="loginBtn">
                Login
              </button>
              <div className="divider">
                <span>Or</span>
              </div>
              <button type="button" className="googleLogin">
                <i className="fa-brands fa-google"></i> Login with Google
              </button>
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
      </div>
    </>
  );
};

export default LoginPage;
