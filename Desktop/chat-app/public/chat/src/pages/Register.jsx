import React from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';
function Register() {
  function handleSubmit(e){
    
   
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



  }
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chat-App</span>
      <span className="title">Register</span>
      <form onSubmit={handleSubmit} >
        <input required type="text" placeholder="display name" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <input required style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src='' alt="" />
          <span>Add an avatar</span>
        </label>
        <button >Sign up</button>
      </form>
      <p>
        You do have an account? Login
      </p>
    </div>
  </div>
  )
}

export default Register;


