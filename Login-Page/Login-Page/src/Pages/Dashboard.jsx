import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./css/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("userLoggedIn");
    if (!isLoggedIn) {
      console.log(isLoggedIn);
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    navigate("/");
  };

  const handleTodoList = () => {
    navigate("/TodoList");
  };
  return (
    <div className="dash-wrap">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">PD</div>
          <h2>PurpleDash</h2>
        </div>
        <ul className="menu">
          <li>Dashboard</li>
          <li>Users</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
        <ul className="menuSaperater">
          <li>
            <span className="saperater"></span>
          </li>
        </ul>
        <ul className="menu">
          <li onClick={handleTodoList}>Todo List</li>
        </ul>
      </aside>

      <main className="main">
        <div className="topbar">
          <h1>Dashboard Overview</h1>
          <div>
            <input type="text" placeholder="Search..." />
            <button className="Logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>4,320</p>
          </div>
          <div className="stat-card">
            <h3>New Sales</h3>
            <p>1,090</p>
          </div>
          <div className="stat-card">
            <h3>Visitors</h3>
            <p>23,410</p>
          </div>
        </div>

        <div className="panels">
          <div className="panel">
            <h3>Recent Activity</h3>
            <ul>
              <li>User Ali purchased premium</li>
              <li>Sana registered an account</li>
              <li>Zahid updated profile</li>
            </ul>
          </div>
          <div className="panel">
            <h3>Quick Stats</h3>
            <p>Conversion: 4.8%</p>
            <p>Bounce: 21%</p>
            <p>Avg Session: 7m 12s</p>
          </div>
        </div>
      </main>
    </div>
  );
}
