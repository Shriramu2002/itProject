import "./login.css";
import { Link } from "react-router-dom";
import {useState} from 'react';



let Login = function Login() {

   let [username,setusername]=useState("");
   let [password,setpassword]=useState("");
   let [email,setemail]=useState("");
   

   let usernamechangehandler = (event) =>{
    setusername(event.target.value);
   }

   let emailchangehandler = (event) =>{
    setemail(event.target.value);
   }

   let passwordchangehandler = (event) =>{
    setpassword(event.target.value);
   }
   
   let submitHandler = (event) => {
    event.preventDefault();

    let newBlog = {
        id: Math.random().toString(),
        username: username,
        password: password,
        email: email
    }

     let fetchOption = {
         method: "POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(newBlog)
     }
        console.log(newBlog)

     fetch("http://localhost:3001/user/checkauthentication", fetchOption)
         .then( response => console.log(response))
         .catch(err => console.error(err))
     

 }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
      <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your Username..." onChange={usernamechangehandler} />
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." onChange={emailchangehandler} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." onchange={passwordchangehandler} />
        <button className="loginButton" onclick={submitHandler}>Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}

export default Login;