import './App.css'
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate , useLocation } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Bookmarks from './pages/Bookmarks'
import About from './pages/About'
import Error from './pages/Error'

function App() {

  const navigate = useNavigate()
  const [token, setToken] = useState(localStorage.getItem("token"))
  const location = useLocation()

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/register")
    }
  })

  function ProjectedRote({ children, redirectTo = "/register", isAuthentication }) {
    if (!isAuthentication) {
      navigate(redirectTo)
    }
    return children
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Error></Error>}></Route>


        <Route path='/' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Home></Home>
          </ProjectedRote>}>
        </Route>

        <Route path='/movies' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Movies></Movies>
          </ProjectedRote>}>
        </Route>

        <Route path='/series' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Series></Series>
          </ProjectedRote>}>
        </Route>

        <Route path='/bookmarks' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <Bookmarks></Bookmarks>
          </ProjectedRote>}>
        </Route>

        <Route path='/about' element={
          <ProjectedRote isAuthentication={token ? true : false}>
            <About></About>
          </ProjectedRote>}>
        </Route>

      </Routes>
    </>
  )
}

export default App
