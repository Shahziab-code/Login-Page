import { useNavigate } from "react-router-dom";
import "./css/Dashboard.css";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleTodoList = () => {
    navigate("/TodoList");
  }

  return (
    <>
      <div className="Dashboard">
        <div className="DashboardContainer">
          <h1>Welcome to the Dashboard!</h1>
          <p>You have successfully logged in.</p>
          <button className="BlueBtn" onClick={handleLogout}>
            Logout
          </button>
          <button className="BlueBtn" onClick={handleTodoList}>Go to Todo List</button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
