import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
//import { removeFeed } from "../utils/feedSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  //const feed = useSelector((store) => store.feed);

  //console.log("data from navbar: ", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () =>  {
    try{
      await axios.post(BASE_URL + "/logout", {},
      {
        withCredentials: true,
      });
      dispatch(removeUser(user));
      //dispatch(removeFeed(feed));
      return navigate("/login");
    }catch(err) {
      console.log("Erros is:", err);
    }
  }

  return (
    <>
    <div className="navbar bg-base-300 px-10">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl text-white">DevTinder</Link>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      {user && (
        <>
        <div className="flex items-center gap-4">
          <p className="m-0">Wellcome, {user.firstName} {user.lastName}</p>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt={user.firstName}
                src={user.photoURL} />
            </div>
          </div>
        </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 12c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/connections" className="justify-between">
            Connections
          </Link>
        </li>
        <li>
          <Link to="/requests" className="justify-between">
            Requests
          </Link>
        </li>
        <li>
          <Link onClick={handleLogout}>
            Logout
            <span className="badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M16 17l5-5-5-5v3H9v4h7v3zM4 4h9V2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h9v-2H4V4z"></path>
              </svg>
            </span>
          </Link>
        </li>
      </ul>
      </>
    )}
    </div>
  </div>
</div>
    </>
  )
}

export default NavBar