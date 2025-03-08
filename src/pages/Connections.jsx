
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {

  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {

    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1 className="text-3xl flex justify-center my-10"> No Connections Found</h1>;

  return (
    <div className="text-center my-20">
      <h1 className="text-bold text-white text-3xl mb-5">Connections</h1>
      <div className="w-1/2 m-auto">
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoURL, age, gender, about } =
          connection;
          //const setAbout = about.trim

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
              <p>{about.length > 100 ? about.substring(0, 100) + "..." : about}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>

  );
};
export default Connections;