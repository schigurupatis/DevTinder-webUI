import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try{
      const res = await axios.get(BASE_URL + "/profile/view", 
        {
          withCredentials: true,
        }
      );
      console.log("current user:", res.data);
      dispatch(addUser(res.data));

    }catch(err) {
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