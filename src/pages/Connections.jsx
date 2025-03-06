import axios from 'axios';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import { addConnections } from '../utils/connectionsSlice';

const Connections = () => {

    const connections = useSelector((store) => store.addConnections);
    const dispatch = useDispatch();
    
    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            });
            console.log("connections for the loggedin user is:", res.data); 
            dispatch(addConnections(res.data.data))
        } catch (err) {
            console.log("Error is:", err);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, [])

    if (!connections) return;
    if (connections.length === 0) return <h1>No Connections Found</h1>

  return (
    <>
        <h1 className='text-center text-2xl'>Connections</h1>
        {connections.map((connection) => {
            const {firstName, lastName, about, photoURL, age, gender} = connection;
            return (
                <div className="card card-side bg-base-100 shadow-sm" key={connection.id}>
                    <figure>
                        <img
                        src={photoURL}
                        alt={firstName + " " + lastName} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{firstName}</h2>
                        <p>{age}</p>
                        <p>{gender}</p>
                        <p>{about}</p>
                    </div>
                </div>
            )
        }
        )}
    </>
  )
}

export default Connections