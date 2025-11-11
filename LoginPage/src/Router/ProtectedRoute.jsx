import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;