import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Body from "./components/Body"
import Profile from "./pages/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./pages/Feed"
import Connections from "./pages/Connections"
import Requests from "./pages/Requests"
import Registration from "./pages/Registration"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
