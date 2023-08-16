import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="navbar">
     <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
     </div>
      <div>
        <p> {user?.displayName}</p>
        <img src={user?.photoURL || ""} />
      </div>
    </div>
  );
};
