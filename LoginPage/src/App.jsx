import { useState } from "react";
import "./App.css";
import {  Routes, Route } from "react-router-dom";

import Login from "./Pages/Login-Page";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Router/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
