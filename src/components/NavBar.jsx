import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  //console.log("data from navbar: ", user);

  return (
    <>
    <div className="navbar bg-base-300 px-10">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl text-white">DevTinder</Link>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      {user && (
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
      )}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/edit">Edit</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default NavBar