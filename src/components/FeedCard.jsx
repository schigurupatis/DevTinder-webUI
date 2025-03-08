import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";


const FeedCard = ({feeds}) => {
    const dispatch = useDispatch();

    if(!feeds) return <p className="flex justify-center my-10">No user data avilable</p>
    const { _id, about, age, firstName, lastName, gender, photoURL, skills } = feeds;
    //console.log("feed data from feedcard:", feeds);

    const handleSendRequest = async (status, userId) => {
      try {
          const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId,
          {},
          { withCredentials: true}
        );
        dispatch(removeUserFromFeed(userId));
      } catch (err) {
        console.log(err);
      }
    }



  return (
    <>
        <div className='flex justify-center items-center'>
        <div className="card card-compact bg-white text-black w-96 shadow-xl">
  <figure className="h-64 object-cover">
    <img
      src={photoURL}
      alt={firstName}
      className="w-full h-100 object-cover"  
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title m-0">{firstName + " " + lastName}</h2>
    <p>{age && gender && age + " " + gender}</p>
    <p>{about.length > 100 ? about.substring(0, 140) + "..." : about}</p>
    {/* Skills Section */}
    <div className="flex flex-wrap gap-2">
      {skills && skills?.map((skill) => (
        <span key={skill} className="badge badge-info px-2 py-1 text-white">
          {skill}
        </span>
      ))}
    </div>
    <div className="card-actions justify-end mt-5">
      <button className="btn btn-success text-white" onClick={() => handleSendRequest("interested", _id)}>
        Interested
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <button className="btn btn-error text-white" onClick={() => handleSendRequest("ignored", _id)}>
        Ignored
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default FeedCard