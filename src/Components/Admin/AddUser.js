import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AddUserView from './AddUserView';
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  
    const [update,setUpdate ]=useState({

        name:"",
        email:"",
        phoneNumber:"",
        password:"",
        dob:"",
        gender:"",
        role:"",
    

    });

    console.log(update)
    const handleChange=(e)=>{
        const newUpdate={...update};
        newUpdate[e.target.name]=e.target.value 
        setUpdate(newUpdate);
    }

    const navigate=useNavigate()
    const [nameErr, setNameErr]=useState("");
    const [emailErr, setEmailErr]=useState("");
    const [phoneNumberErr, setPhoneNumberErr]=useState("");
    const [passwordErr, setPasswordErr]=useState("");
    const [dobErr, setDobErr]=useState("");
    const [genderErr, setGenderErr]=useState("");
    const [roleErr, setRoleErr]=useState("");


    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(update.name!=="" && update.email!=="" && update.phoneNumber!=="" && update.password!==""&& update.dob!==""&& update.gender!==""&& update.role!=="")
        {
            console.log(update)
            axios.post(`http://127.0.0.1:8000/api/addUser`,update)
            .then(resp=>{
              if (!resp.data) {
                console.log('erorr')
            } else {
              
              navigate('/ListView');
            }
          }).catch(err=>{
              console.log(err);
            });
        }
      else{
        if(update.name==="")
            setNameErr("Name is required");
        else
            setNameErr("")

        if(update.email==="")
        setEmailErr("Email is required")
        else
        setEmailErr("")
        if(update.phoneNumber==="")
        setPhoneNumberErr("Phone Number is required")
        else
        setPhoneNumberErr("")
        if(update.password==="")
        setPasswordErr("Password is required")
        else
        setPasswordErr("")
        if(update.dob==="")
        setDobErr("Date of Birth is required")
        else
        setDobErr("")
        if(update.gender==="")
        setGenderErr("Gender is required")
        else
        setGenderErr("")
        if(update.role==="")
        setRoleErr("Role is required")
        else
        setRoleErr("")

    }
        }
    


    return (
        <div>
            {/* <Header/> */}
            <div className="Edit"> 
          <form onSubmit={handleSubmit}>
          
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Name:</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" onChange={handleChange} />
                <p style={{color: "red"}}>{nameErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Email:</label>
                <input type="text" name="email" className="form-control" id="formGroupExampleInput"  onChange={handleChange} />
                <p style={{color: "red"}}>{emailErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Phone Number:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="phoneNumber"  onChange={handleChange}/>
                <p style={{color: "red"}}>{phoneNumberErr}</p>
              </div>
              
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Password:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="password"  onChange={handleChange}/>
                <p style={{color: "red"}}>{passwordErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Date of Birth:</label>
                <input type="datetime-local" name="dob" className="form-control" id="formGroupExampleInput"  onChange={handleChange} />
                <p style={{color: "red"}}>{dobErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Gender:</label>
                <select id="gender" name="gender" onChange={handleChange}>
                <option value="Choose Gender">Choose Gender</option>
  <option value="Female">Female</option>
  <option value="Male">Male</option>

  
</select>
                <p style={{color: "red"}}>{genderErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Role:</label>
                <select id="role" name="role" onChange={handleChange}>
                <option value="Choose Role">Choose Role</option>
  <option value="Admin">Admin</option>
  <option value="Doctor">Doctor</option>
  <option value="Patient">Patient</option>
  
</select>
                <p style={{color: "red"}}>{roleErr}</p>
              </div>
             

              
              
              <input type="submit" name="submit" value="Add" className="btn btn-primary login_button"/>
          </form>  
        </div>
        </div>
    );
};

export default AddUser;