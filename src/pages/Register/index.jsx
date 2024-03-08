import {useRef} from 'react'
import logo from "../../assets/Movie.svg"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

import "./index.css"

function Register() {

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
      email: email.current.value,
      password: password.current.value,
    }
    
    setIsloading(true)

    fetch(`${import.meta.env.VITE_AUT_API}signup` , {
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })

    .then(res => res.json())
    .then(data => {
      if(data.message == "User registered successfully!"){
        navigate("/")
      }
      if(data.message == "Failed! Email is already in use!"){
        alert(data.message)
        return
      }
      if(data.message == "Failed! Username is already in use!"){
        alert(data.message)
        return
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
        <h3 className="register-title">Sign Up</h3>
        <input ref={username} type="username" placeholder="Username" />
        <input ref={email} type="email" placeholder="Emil address" />
        <input ref={password} type="password" placeholder="Password address" />
        <input ref={repassword} type="password" placeholder="Repeat Password address" />
        <button onClick={handleRegister} >{isloading ? "loading" : "Create an account"}</button>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
    </>
  )
}

export default Register  