
import {useState} from 'react';
import '../css/stylesheet.css';
import '../pages/login/login.css';

let AuthForm = function ({addNewBlog}) {




    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [login, setLogin] = useState(false);


    let usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    let passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }





    let submitHandler = (event) => {
        event.preventDefault();

        let user = {
            username: username,
            password: password,
        }



        console.log(user);

        let fetchOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(user)
        }

        fetch("http://localhost:8080/user/login", fetchOptions)
            .then(response => {
                if(response.status == 200){
                    setLogin(true);
                }
            })

        setUsername("");
        setPassword("");

    }



    return (
        

<div className="login">
<span className="loginTitle">Login</span>
<form className="loginForm" onSubmit={submitHandler}>
  <label>Email</label>
  <input className="loginInput" type="text" placeholder="Enter your email..." />
  <label>Password</label>
  <input className="loginInput" type="password" placeholder="Enter your password..." />
  <button className="loginButton">Login</button>
</form>
  <button className="loginRegisterButton">Register</button>
</div>
    )
}


export default AuthForm;