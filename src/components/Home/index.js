import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../GoogleLogin";

const Home = ({ authUser }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert("Error signing out:", error);
    }
  };
  return (
    <div className="main">
      <div className="profile-display px-3">
        <div>
          <div className="heading-signup">name: {authUser?.displayName}</div>
          <div className="heading-signup">Email: {authUser?.email}</div>
        </div>
        <div>
          <button onClick={handleLogout} className="submit-button-styles">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
