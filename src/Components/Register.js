import React, {useState, userEffect} from "react";
import axios from "axios";
// import '../Head.css';
import { useNavigate } from 'react-router-dom'

const Register = ()=>{
    let[name, setName] = useState("");
    let[email, setEmail] =useState("");
    let[phoneNumber,setPhoneNumber ] =useState("");
    let[password, setPassword] =useState("");
    let[dob, setDob] =useState("");
    let[gender, setGender] =useState("");
    let[role,setRole ] =useState("");
    let[verified, setVerified] =useState("");

    let history = useNavigate();

    const RegisterSubmit =() =>{
        console.log(name);
        console.log(email);
        console.log(phoneNumber);
        console.log(password);
        console.log(dob);
        console.log(gender);
        console.log(role);
        console.log(verified);
        var obj = {name: name, email: email, phoneNumber: phoneNumber, password: password,dob:dob,gender:gender,role:role,verified:'false'};
        axios.post("http://127.0.0.1:8000/api/registration",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userID: token.userID, access_token:token.token, role:token.role};
            localStorage.setItem('user',JSON.stringify(user));
            history.push("/verify");
        }).catch(err=>{
            console.log(err);
        });
    }


return(
    <div className ="formContent">
        <form>
            <label className="label">Register</label><br></br>
            <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"></input><br></br>
            <input className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}placeholder="Email"></input>
            <input className="input" type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}placeholder="PhoneNumber"></input>
            <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}placeholder="Password"></input>
            <input className="input" type="text" value={dob} onChange={(e)=>setDob(e.target.value)}placeholder="Dob"></input>
            <input className="input" type="text" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Gender"></input><br></br>
            
            <input className="input" type="text" value={role} onChange={(e)=>setRole(e.target.value)}placeholder="Role"></input>
            <input className="input" type="hidden" value={verified} onChange={(e)=>setVerified(e.target.value)}placeholder="Verified"></input>
        </form>
        <button className= "button" onClick={RegisterSubmit}>Register</button>
    </div>

    )
}

export default Register; 