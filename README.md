# DevTinder WebUI FrontEnd

## PART - 1

- Created a Vite + React
- Remove unnecessary code & create a hellow world app
- Install TailwindCSS latest (CSS Framework)
- Install Design Component Library (Daisy UI) & Add Navbar
- Created a separte Navbar.jsx Component 
- Add Routing (React-Router-DOM), install react-router-dom package
- created BrowserRouter > Routes > Route =/Body > RouteChildren
- Created an outlet in body component
- Created a Footer


## PART - 2

- Created a LOGIN Page with input fields "Email" & "Password"
- Created state variables for "Email" & "Password" to access values using e.target.value
- Installed "axios" package for fetching data & sending data from FrontEnd to BackEnd
- Installed "cors" npm package in backend expressjs server for bypassing CORS Policy from one domain(FrontEnd) to another(Backend) with configurations => origin: "http://localhost:5173", credentials: true,
- Setup the JSON Token view in Frontend & Backend with parameters(withCredentials: true) object
- Installed "Redux" & "Redux Tool Kit" for State Managment
- - Configured appStore and "Provider" & passed this appStore in app.jsx above BrowserRouter to access by app
- - Configured userSlice with "reducer" & "actions"(addUser, removeUser)
- - Subscribed to Store with "useSelector" to show LoggedIn User data in Navbar(name & photoUrl)



## PART - 3

- Fetching the current loggedin user profile/view API when user loggedin in body component
- If user not loggedin then restricted user to access other routes(pages) using err.status(400) while catching error
- if token is not present then redirecting user to login page from body component
- Bulding Logout working in FrontEnd
- Added FrontEnd validations using formik & yup libraries
- Created Profile page with all details of loggedin user
- Created Feed component to show data of all users
- Stored Feed data in Redux
- Edit Profile component created with form fields & onload prefilled current loggedin user data
- Worked with PATCH Api for Editing or Updating profile data
- Show toast message on saving profile data



## PART - 4

- See all my connections list(existing Connections - page)
  -- Created ConnectionsSlice with add & remove connection reducers
  -- Fetch existing connections of loggedin user using useEffect hook
  -- Storing connections in Store
  -- Render with user card design with array map method
- See all Requests received from other users(New Requestes - page) 
  -- Created RequestSlice with add & remove Request reducers
  -- Fetch requests of logggedin user using useEffect hook
  -- Storing requests in store
  -- Render the requests with new ui design
  -- Accepted and Rejected Request 



## PART - 5

- Accept or Ignore the usercard from feed
  -- if Accepted or Rejected for perticular userId then removing that userId from feed alwell as from redux store also
- Signup new user
- End to End testing entire application