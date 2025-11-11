import "./css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="DashContainer">
      <div className="content">
        <h2 className="h2">Dashboard</h2>
        <p className="pTag">Only logged-in users can see this.</p>

        <button
          className="logoutBtn"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
