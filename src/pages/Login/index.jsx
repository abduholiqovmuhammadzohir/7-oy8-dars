import {useRef} from 'react'
import logo from "../../assets/Movie.svg"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

import "../Register/index.css"

function Login() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const repassword = useRef()
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(false)

  function validate() {
    
    return true
  }

  function handleRegister(e) {
    e.preventDefault()

    const isValid = validate()

    const user = {
      username: username.current.value,
      password: password.current.value,
    }
    
    setIsloading(true)

    fetch(`${import.meta.env.VITE_AUT_API}signin` , {
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })

    .then(res => res.json())
    .then(data => {
      if(data.id){
        localStorage.setItem('token',data.accessToken)
        localStorage.setItem("user",JSON.stringify(data))
        navigate("/")
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setIsloading(false)
    })

  }

  return (
    <>
    <div className="register-wrapper">
      <img width={35} height={25} src={logo} alt="Logo" className="register-logo" />
      <form className="register-form">
        <h3 className="register-title">Login</h3>
        <input ref={username} type="username" placeholder="Username" />
        <input ref={password} type="password" placeholder="Password address" />
        <button onClick={handleRegister} >{isloading ? "Loding..." :"Login to your accaount"}</button>
        <p>Don’t have an accaount? <Link to="/register">Register</Link> </p>
      </form>
    </div>
    </>
  )
}

export default Login  