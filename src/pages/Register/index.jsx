import React from 'react'
import logo from "../../assets/Movie.svg"
import {Link} from "react-router-dom"
import "./index.css"

function Register() {
  return (
    <>
    <div className="register-wrapper">
      <img width={35} height={25} src={logo} alt="Logo" className="register-logo" />
      <form className="register-form">
        <h3 className="register-title">Sign Up</h3>
        <input type="email" placeholder="Emil address" />
        <input type="password" placeholder="Password address" />
        <input type="password" placeholder="Repeat Password address" />
        <button>Create an account</button>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
    </>
  )
}

export default Register  