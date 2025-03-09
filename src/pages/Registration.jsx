import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Registration = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {

    try{
      const res = await axios.post(BASE_URL + "/signup", {
        firstName,
        lastName,
        emailId,
        password,
      }, 
      {
        withCredentials: true,
      }
    );
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        return navigate("/login")
      }, 3000)
    } catch(err) {
      setError(err?.response?.data || "something went wrong");
    }
  }

  const handleShowPassword = () => {
    setShowPwd(!showPwd);
  }

  return (
    <div className="flex justify-center items-center my-10"> 
        <div className="card bg-neutral text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-6">Register your Account</h2>
   <div className="w-full">
   
<label className="input input-bordered flex items-center gap-2 mb-4">
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  fill="currentColor"
  className="h-4 w-4 opacity-70"
>
  <path d="M8 1a4 4 0 1 1 0 8A4 4 0 0 1 8 1ZM2 13c0-2.761 2.686-5 6-5s6 2.239 6 5v1H2v-1Z" />
</svg>
  <input type="text" className="grow" placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  fill="currentColor"
  className="h-4 w-4 opacity-70"
>
  <path d="M8 1a4 4 0 1 1 0 8A4 4 0 0 1 8 1ZM2 13c0-2.761 2.686-5 6-5s6 2.239 6 5v1H2v-1Z" />
</svg>

  <input type="text" className="grow" placeholder="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
</label>
<label className="input input-bordered flex items-center gap-2 mb-4">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type={showPwd ? "text" : "password"} placeholder="Password" className="grow" value={password} onChange={(e) => setPassword(e.target.value)} />

  <svg onClick={handleShowPassword}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 16 16"
  fill="currentColor"
  className="h-4 w-4 opacity-70 cursor-pointer"
>
{showPwd ? (
      // Eye-slash icon (password hidden)
      <path d="M2.5 1.5a.75.75 0 0 1 1.06 0L14.5 12.44a.75.75 0 1 1-1.06 1.06L10.94 11A6.13 6.13 0 0 1 8 12c-3.5 0-6.5-2.5-7.5-5A9.07 9.07 0 0 1 3.05 4.8L2.5 4.25a.75.75 0 0 1 0-1.06Zm4.73 6.79a2 2 0 0 0 2.45 2.45L7.23 8.29ZM6 3.05a6.13 6.13 0 0 1 2-.05c3.5 0 6.5 2.5 7.5 5a9.06 9.06 0 0 1-2.3 3.2.75.75 0 0 1-1.02-1.1 7.56 7.56 0 0 0 1.68-2.1 7.56 7.56 0 0 0-4.36-3.4A7.56 7.56 0 0 0 6 3.05Z"/>
    ) : (
      // Eye icon (password visible)
      <path d="M8 3c-3.5 0-6.5 2.5-7.5 5 1 2.5 4 5 7.5 5s6.5-2.5 7.5-5c-1-2.5-4-5-7.5-5Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
    )}
</svg>

</label>
   </div>
   <p className="text-error">{error}</p>
    <div className="flex justify-center w-full">
      <button className="btn btn-primary w-full text-white" onClick={handleRegister}>Register</button>
    </div>
    <div className="flex justify-center w-full mt-5">
      <p>Already have Account <Link to="/login" className="text-red-500">LogIn</Link> Now</p>
    </div>
  </div>
</div>

{showToast && (
      <div className="toast toast-top toast-center">
  <div className="alert alert-success">
    <span className="text-white">Registered successfully.</span>
  </div>
</div>
)}
    </div>
  )
}

export default Registration