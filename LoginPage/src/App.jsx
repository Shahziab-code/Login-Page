import { useState } from "react";
import "./App.css";


import Login from "./Pages/Login-Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Login />

    </>
  );
}

export default App;
