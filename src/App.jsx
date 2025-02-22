import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Body from "./components/Body"
import Profile from "./pages/Profile"

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<Body />} path="/">
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/profile" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
