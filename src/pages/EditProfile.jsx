import { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import UserCard from "../components/UserCard";

const EditProfile = ({user}) => {
  //console.log("prefilled user is:", user)
  //const {firstName, lastName, age, gender, about, photoURL, skills} = user;

    const [firstName, setfirstName] = useState(user.firstName);
    const [lastName, setlastName] = useState(user.lastName);
    const [age, setage] = useState(user.age);
    const [gender, setgender] = useState(user.gender);
    const [about, setabout] = useState(user.about);
    const [photoURL, setphotoURL] = useState(user.photoURL);
    const [skills, setskills] = useState(user.skills);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const saveProfile = async () => {
    setError("");

    try{
      const res = await axios.patch(BASE_URL + "/profile/edit", {
        firstName,
        lastName,
        age,
        gender,
        about,
        skills,
        photoURL,
      }, 
      {
        withCredentials: true,
      }
    );
      console.log("LoggedIn User is in LogIn Page:", res.data);
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000)
      //navigate("/")
    } catch(err) {
      setError(err?.response?.data || "something went wrong");
    }
  }




  return (
    <>
    <div className="flex justify-center items-center gap-5">
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
      <button className="btn btn-primary w-full" onClick={saveProfile}>Save Profile</button>
    </div>
  </div>
</div>
    </div>
    <UserCard user={{about, age, firstName, lastName, gender, photoURL, skills}} />
    </div>
    {showToast && (
      <div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span className="text-white">Profile Saved successfully.</span>
  </div>
</div>
)}
    </>
  )
}

export default EditProfile