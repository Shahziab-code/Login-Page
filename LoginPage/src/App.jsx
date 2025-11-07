import { useState } from "react";
import ImageView from "./assets/ImageView.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Contained">
        <div className="mainContainer">
          <div className="imageView">
            <img src={ImageView} alt="Left Side Image" className="viewImg" />
          </div>
          <div className="loginView">
            <div className="loginCard">
              <h1>login Page</h1>
                <p></p>
                <input type="text" />
                <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
