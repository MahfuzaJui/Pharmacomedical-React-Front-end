import React, {useState, userEffect} from "react";
import axios from "axios";
// import '../Head.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const Login = ()=>{
    let[email, setEmail] = useState("");
    let[password, setPassword] =useState("");
    let history = useNavigate();

    const loginSubmit= ()=>{

        console.log(email);
        console.log(password);
        var obj = {email: email, password: password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userID: token.userID, access_token:token.token, role:token.role};
            localStorage.setItem('user',JSON.stringify(user));
            if(token.role == "admin"){
                history.push("/home");
            }
            
        }).catch(err=>{
            console.log(err);
        });
    }
    return(
        <div className ="formContent">
            <form>
                <label className="label">Login</label><br></br>
                <input className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </form>
                <button className= "button" onClick={loginSubmit}>Login</button>
                <p>Don't have any account?</p>
                <u><Link to="/registration"> Create an account</Link></u>
        </div>

    )
}
export default Login; 