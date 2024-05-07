import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signupWithEmail } from "../../GoogleLogin";
import Input from "../Input";
const Login = ({ authUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignInClick = () => {
    signInWithGoogle();
  };
  
  const handleSignin = () => {
    console.log(email, password);
    if (!email || !password) return alert("Fields can't be missing");
    signupWithEmail({ email, password });
  };

  useEffect(() => {
    if (authUser) {
      navigate("/home");
    }
  }, [authUser, navigate]);

  return (
    <div className="main">
      <div className="profile-display px-3">
        <div className="heading-signup">Google SignIn</div>
        <div>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholderText="Enter Email"
          />
        </div>
        <div>
          <Input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholderText="Enter Password"
          />
        </div>
        <div>
          <button onClick={handleSignin} className="submit-button-styles">
            Signin
          </button>
        </div>
        <div className="divider">OR</div>
        <div>
          <button onClick={handleSignInClick} className="submit-button-styles">
            Signin with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
