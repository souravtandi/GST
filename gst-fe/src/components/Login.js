import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const submitLogin = (event) => {
        //stop the page refresh when form is submitted
        event.preventDefault();
        //Backend API for Login
        console.log("Entered email is: "+ email);
        console.log("Entered password is: " + password);

        navigate("/");

    }   
        return (
                <div className="container p-3 mt-5">
                    <form onSubmit={(event) => { submitLogin(event) }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input onChange={(event) => { setEmail(event.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input onChange={(event) => { setPassword(event.target.value) }} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div> 
                    </form>
                </div>
    )
}

export default Login