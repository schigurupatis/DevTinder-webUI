

const UserCard = ({user}) => {
    if(!user) return <p>No user data avilable</p>
    const { about, age, emailId, firstName, lastName, gender, photoURL, skills } = user;
    //console.log("user data from usercard:", user);
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
  </div>
</div>
    </div>
  )
}

export default UserCard;