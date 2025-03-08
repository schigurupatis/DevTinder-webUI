import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";


const Requests = () => {

  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, 
      {}, 
      { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch(err) {
      console.log(err);
    }
  }

  const fetchRequests = async () => {

    try {
      const res = await axios.get(BASE_URL + "/user/requests/received/", {
        withCredentials: true,
      });
      
      dispatch(addRequests(res.data.data));
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchRequests();
  }, [])

  if(!requests) return;
  if(requests.length === 0) return <h1 className="text-3xl flex justify-center my-10">No Requests Found</h1>


  return (
    <div className="text-center my-20">
      <h1 className="text-bold text-white text-3xl mb-5">Requests</h1>
      <div className="w-1/2 m-auto">
      {requests.map((request) => {
        const { _id, firstName, lastName, photoURL, age, gender, about } =
          request.fromUserId;

        return (
          <div className="card card-side bg-base-300 shadow-md p-2 my-6 gap-3 flex flex-col md:flex-row justify-start items-center" key={_id}>
            <figure className="c-p-img">
              <img
                src={photoURL}
                alt={firstName}
                className="w-24 h-24  rounded-full"

              />
            </figure>
            <div className="card-body text-center p-0 gap-0 md:text-left">
              <h2 className="card-title mb-0 block md:flex">{firstName + " " + lastName} </h2>
              <small className="mb-2">{gender + " " + age} </small>
              <p>{about.length > 100 ? about.substring(0, 70) + "..." : about}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-success text-white" onClick={() => reviewRequest("accepted", request._id)}>
                Accept
              </button>
              <button className="btn btn-error text-white" onClick={() => reviewRequest("rejected", request._id)}>
                Reject
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default Requests