

const UserCard = ({user}) => {
    if(!user) return <p>No user data avilable</p>
    const { about, age, emailId, firstName, lastName, gender, photoURL, skills } = user;
    console.log("user data from usercard:", user);
  return (
    <div className='flex justify-center items-center'>
        <div className="card card-compact bg-white text-black w-96 shadow-xl">
  <figure>
    <img
      src={photoURL}
      alt={firstName}
      className="w-full h-100 object-cover"  
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    <p>{about}</p>
    <p>{age && gender && age + " " + gender}</p>
    {/* Skills Section */}
    <div className="flex flex-wrap gap-2">
      {skills && skills?.map((skill, index) => (
        <span key={skill} className="badge badge-info px-2 py-1 text-white">
          {skill}
        </span>
      ))}
    </div>
    <div className="card-actions justify-end mt-5">
      <button className="btn btn-success text-white">
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
      <button className="btn btn-error text-white">
        Ignore
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
  )
}

export default UserCard;