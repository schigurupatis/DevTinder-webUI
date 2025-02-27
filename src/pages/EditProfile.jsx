import { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const EditProfile = () => {

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [about, setabout] = useState("");
    const [photoURL, setphotoURL] = useState("");
    const [skills, setskills] = useState("");
    const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = async () => {

    try{
      const res = await axios.post(BASE_URL + "/profile/edit", {
        firstName,
        lastName,
        age,
        gender,
        about,
        skills,
      }, 
      {
        withCredentials: true,
      }
    );
      console.log("LoggedIn User is in LogIn Page:", res.data);
      dispatch(addUser(res?.data));
      navigate("/")
    } catch(err) {
      setError(err?.response?.data || "something went wrong");
    }
  }


  return (
    <>
        <div className="flex justify-center items-center my-10"> 
        <div className="card bg-neutral text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-6">Edit Profile</h2>
   <div className="w-full">
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" placeholder="Firstname" className="grow" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" placeholder="Lastname" className="grow" value={lastName} onChange={(e) => setlastName(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" placeholder="About" className="grow" value={about} onChange={(e) => setabout(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" placeholder="Age" className="grow" value={age} onChange={(e) => setage(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" placeholder="Gender" className="grow" value={gender} onChange={(e) => setgender(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" placeholder="Photo" className="grow" value={photoURL} onChange={(e) => setphotoURL(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <input type="text" placeholder="Skills" className="grow" value={skills} onChange={(e) => setskills(e.target.value)} />
</label>
   </div>
   <p className="text-error">{error}</p>
    <div className="flex justify-center w-full">
      <button className="btn btn-primary w-full" onClick={handleUpdate}>Update Profile</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default EditProfile