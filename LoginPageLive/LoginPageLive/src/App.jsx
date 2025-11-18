import { useState } from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import TodoList from "./Pages/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
