import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
//import UserCard from "../components/UserCard";
import FeedCard from "../components/FeedCard";

const Feed = () => {

  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return; 
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      })
      //console.log("All Feed data is here:", res.data.data);
      dispatch(addFeed(res?.data?.data));
    } catch(err) {
      console.log("error is:", err);
    }
  }

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    <div className="flex justify-center mt-4 flex-col items-center">
      {/* <h1 className="text-2xl">Feed data here</h1> */}
      {feed && (
          <div className="flex justify-center my-10">
            {/* <UserCard user={feed[0]} /> */}
            <FeedCard feeds={feed[0]}/>
          </div>
        )
      }
    </div>
  )
}

export default Feed