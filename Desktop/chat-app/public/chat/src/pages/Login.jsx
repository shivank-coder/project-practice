import React from 'react'
function Register() {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chat-App</span>
      <span className="title">Sign in</span>
      <form >
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
       
        <button >Sign in</button>
      </form>
      <p>
        already  have an account? Register
      </p>
    </div>
  </div>
  )
}

export default Register;


