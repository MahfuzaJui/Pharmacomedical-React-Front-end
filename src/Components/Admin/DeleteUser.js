import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';
// import Header from '../Header';
import { useNavigate } from 'react-router-dom'
import DeleteUserView from './DeleteUserView';

const DeleteUser = (props) => {
    const{userID,name,email,phoneNumber,password,dob,gender}=props.user
    const uid=localStorage.getItem('userID')
    const [update,setUpdate ]=useState({
        userID:"",
        name:"",
        email:"",
        phoneNumber:"",
        password:"",
        dob:"",
        gender:"",
    

    });
    //update.name=uid;

    const mount=()=>{
        setUpdate(
            {
                ...update,
                userID:userID,
                name:name,
                email:email,
                phoneNumber:phoneNumber,
                password:password,
                dob:dob,
                gender:gender,
            
            }
        )
    }
    useEffect(()=>{
        mount()
    },[])
    console.log(update)
    const handleChange=(e)=>{
        const newUpdate={...update};
        newUpdate[e.target.name]=e.target.value 
        setUpdate(newUpdate);
    }

    const history=useNavigate()
    // const [nameErr, setNameErr]=useState("");
    // const [priceErr, setPriceErr]=useState("");
    // const [shortdescErr, setShortdescErr]=useState("");
    // const [descErr, setDescErr]=useState("");
    // const [imageErr, setImageErr]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(update.name!=="" && update.email!=="" && update.phoneNumber!=="" && update.password!==""&& update.dob!==""&& update.gender!=="")
        {
            console.log(update)
            axios.post(`http://127.0.0.1:8000/api/deleteUser/${userID}`,update)
            .then(resp=>{
              history.push('/ListView')
          }).catch(err=>{
            console.log(err);
          });
          e.preventDefault();
      }
        }
    


    return (
        <div>
            {/* <Header/> */}
            <div className="Edit"> 
          <form onSubmit={handleSubmit}>
           
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Name:</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" defaultValue={name} onChange={handleChange}onMouseOver={mount}/>
                {/* <p style={{color: "red"}}>{priceErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Email:</label>
                <input type="text" name="email" className="form-control" id="formGroupExampleInput" defaultValue={email} onChange={handleChange} />
                {/* <p style={{color: "red"}}>{shortdescErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Phone Number:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="phoneNumber" defaultValue={phoneNumber} onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Password:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="password" defaultValue={password} onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Date of Birth:</label>
                <input type="text" name="dob" className="form-control" id="formGroupExampleInput" defaultValue={dob} onChange={handleChange} />
                {/* <p style={{color: "red"}}>{shortdescErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Gender:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="gender" defaultValue={gender} onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
             

              {/* <div className="mb-3" hidden>
                <label for="formGroupExampleInput" className="form-label" style="margin-top: 20px">Agent Name</label>
                <input type="text" name="agentname" className="form-control" id="formGroupExampleInput" value="{{Session()->get('userId')}}">
                @error('agentname')
                  <span className="text-danger">{{$message}}</span>
                @enderror
              </div> */}
              
              <input type="submit" name="submit" value="Delete" className="btn btn-primary login_button"/>
          </form>  
        </div>
        </div>
    );
};

export default DeleteUser;