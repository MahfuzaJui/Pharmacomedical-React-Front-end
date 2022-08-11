import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import { useHistory } from 'react-router-dom';
import AddAppView from './AddAppView';
import { useNavigate } from 'react-router-dom'

const AddApp = () => {
  
    const [update,setUpdate ]=useState({

        appointmentDateTime:"",
        userID:"",
        doctorID:"",
        purpose:"",
        visited:"",
        hasPaid:"",
        paidDateTime:"",
        appointmentStatus:"",
        link:"",

    });
  

  
    console.log(update)
    const handleChange=(e)=>{
        const newUpdate={...update};
        newUpdate[e.target.name]=e.target.value 
        setUpdate(newUpdate);
    }
    const navigate=useNavigate()
    const [appointmentDateTimeErr, setAppointmentDateTimeErr]=useState("");
    const [userIDErr, setUserIDErr]=useState("");
    const [doctorIDErr, setDoctorIDErr]=useState("");
    const [purposeErr, setPurposeErr]=useState("");
    const [visitedErr, setVisitedErr]=useState("");
    const [hasPaidErr, setHasPaidErr]=useState("");
    const [paidDateTimeErr, setPaidDateTimeErr]=useState("");
    const [appointmentStatusErr, setAppointmentStatusErr]=useState("");
    const [linkErr, setLinkErr]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(update.appointmentDateTime!=="" && update.userID!=="" && update.doctorID!=="" && update.purpose!==""&& update.visited!==""&& update.hasPaid!==""&& update.paidDateTime!==""&& update.appointmentStatus!==""&& update.link!=="")
        {
            console.log(update)
            axios.post(`http://127.0.0.1:8000/api/addapp`,update)
            .then(resp=>{
              if (!resp.data) {
                console.log('erorr')
            } else {
              
              navigate('/JoinView');
            }
          }).catch(err=>{
              console.log(err);
            });
        }

        else{
          if(update.appointmentDateTime==="")
          setAppointmentDateTimeErr("Appointment Date and Time are required");
          else
          setAppointmentDateTimeErr("")
  
          if(update.userID==="")
          setUserIDErr("Patient ID is required")
          else
          setUserIDErr("")
          if(update.doctorID==="")
          setDoctorIDErr("Doctor ID is required")
          else
          setDoctorIDErr("")
          if(update.purpose==="")
          setPurposeErr("Purpose is required")
          else
          setPurposeErr("")
          if(update.visited==="")
          setVisitedErr("Visited field is required")
          else
          setVisitedErr("")
          if(update.hasPaid==="")
          setHasPaidErr("Payment status is required")
          else
          setHasPaidErr("")
          if(update.paidDateTime==="")
          setPaidDateTimeErr("Payment Date and Time are required")
          else
          setPaidDateTimeErr("")
          if(update.appointmentStatus==="")
          setAppointmentStatusErr("Appointment Status is required")
          else
          setAppointmentStatusErr("")
          if(update.link==="")
          setLinkErr("Appointment Link is required")
          else
          setLinkErr("")
  
  
      }
          }
      
  
  
    return (
        <div>
            {/* <Header/> */}
            <div className="Edit"> 
          <form onSubmit={handleSubmit}>
          
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Appointment Date and Time:</label>
                <input type="datetime-local" name="appointmentDateTime" className="form-control" id="formGroupExampleInput" onChange={handleChange}/>
                <p style={{color: "red"}}>{appointmentDateTimeErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Patient ID:</label>
                <select id="userID" name="userID" onChange={handleChange}>
                <option value="Select Patient ID">Select Patient ID</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="16">16</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="27">27</option>
  
</select>
                <p style={{color: "red"}}>{userIDErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Doctor ID:</label>
                <select id="doctorID" name="doctorID" onChange={handleChange}>
                <option value="Select Doctor ID">Select Doctor ID</option>
                <option value="1">1</option>
  <option value="2">2</option>

  
</select>
                <p style={{color: "red"}}>{doctorIDErr}</p>
              </div>
              
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Purpose:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="purpose"  onChange={handleChange}/>
                <p style={{color: "red"}}>{purposeErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Visited:</label>
                <select id="visited" name="visited" onChange={handleChange}>
  <option value="Yes">Yes</option>
  <option value="No">No</option>

  
</select>
                <p style={{color: "red"}}>{visitedErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Has Paid:</label>
                <select id="hasPaid" name="hasPaid" onChange={handleChange}>
  <option value="True">True</option>
  <option value="False">False</option>

  
</select>
                <p style={{color: "red"}}>{hasPaidErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Paid Date and Time:</label>
                <input type="datetime-local" className="form-control" id="exampleFormControlTextarea1" rows="3" name="paidDateTime"  onChange={handleChange}/>
                <p style={{color: "red"}}>{paidDateTimeErr}</p>
                <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Appointment Status:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="appointmentStatus"  onChange={handleChange}/>
                <p style={{color: "red"}}>{appointmentStatusErr}</p>
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Link:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="link"  onChange={handleChange}/>
                </div>
                <p style={{color: "red"}}>{linkErr}</p>
              </div>
             

              
              
              <input type="submit" name="submit" value="Add" className="btn btn-primary login_button"/>
          </form>  
        </div>
        </div>
    );
};

export default AddApp;