import "../App.css";
import ImageView from "../assets/ImageView.jpg";

const Login = () => {
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
          <div className="loginView">
            <div className="loginCard">
              <h1>login to Our Page</h1>
              <p>Sign-up to continue with all tools</p>
              <input
                type="text"
                className="inputField"
                placeholder="Enter User Name"
              />
              <input
                type="text"
                className="inputField"
                placeholder="Enter Password"
              />
              <div className="forgetLink">
                <a href="">Forget-Password</a>
              </div>
              <button className="signBtn">Sign In</button>
              <div className="divider">
                <span>Or</span>
              </div>
              <button className="googleBtn">Continue with Google</button>
              <div className="sigUp">
                <p>Continue with New</p>
                <a href="">Sign-up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
