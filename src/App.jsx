import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Body from "./components/Body"
import Profile from "./pages/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./pages/Feed"

function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route element={<Body />} path="/">
              <Route element={<Feed />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Profile />} path="/profile" />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
