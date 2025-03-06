
import { useEffect } from 'react';
import { BASE_URL } from '../utils/constants'
import axios from 'axios';
//import { useDispatch } from 'react-redux';

const Connections = () => {
    //const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            });
            console.log("connections for the loggedin user is:", res.data.data); 
            //dispatch()
        } catch (err) {
            console.log("Error is:", err);
        }
    }

    useEffect(() => {
        fetchConnections();
    }, [])
  return (
    <div>Connections</div>
  )
}

export default Connections