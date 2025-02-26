import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
// import UserCard from "../components/UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    //if (feed.length) return; // Check if feed already has data
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
      console.log("feed data:", feed);
    } catch (err) {
      console.log(err);
    } 

  }

  useEffect(()=> {
    getFeed();
  }, []);


  return (
    <>
      {/* <UserCard user={feed[0]} /> */}
      <h1>feed data will comes here</h1>
    </>
  )
}

export default Feed