import { useNavigate } from 'react-router-dom';
import './css/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate(-1);
    }
  return (
    <>
        <div className="Dashboard">
            <div className="DashboardContainer">
                <h1>Welcome to the Dashboard!</h1>
                <p>You have successfully logged in.</p>
                <button className='back' onClick={handleLogout}>
                    Go Back
                </button>
            </div>
        </div>
    </>
  )
}

export default Dashboard