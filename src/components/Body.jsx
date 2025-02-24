import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store => store.user)

  const fetchUser = async () => {
    try{
      if (userData) return;
      const res = await axios.get(BASE_URL + "/profile/view", 
        {
          withCredentials: true,
        });
      console.log("current user:", res.data);
      dispatch(addUser(res.data));

    }catch(err) {
      if(err.status === 401) {
        navigate("/login");
      }
      console.log("Error is:", err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body