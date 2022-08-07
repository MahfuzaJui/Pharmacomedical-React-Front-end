import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';
// import Header from '../Header';

import { useNavigate } from 'react-router-dom'

const DeleteApp =  (props) => {
    const{appID,appointmentDateTime,userID,doctorID,purpose,visited,hasPaid,paidDateTime,appointmentStatus,link}=props.app
    const aid=localStorage.getItem('appID')
    const [update,setUpdate ]=useState({
        appID:"",
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
    //update.name=uid;

    const mount=()=>{
        setUpdate(
            {
                ...update,
                appID:appID,
                appointmentDateTime:appointmentDateTime,
                userID:userID,
                doctorID:doctorID,
                purpose:purpose,
                visited:visited,
                hasPaid:hasPaid,
                paidDateTime:paidDateTime,
                appointmentStatus:appointmentStatus,
                link:link
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
        if(update.appointmentDateTime!=="" && update.userID!=="" && update.doctorID!=="" && update.purpose!==""&& update.visited!==""&& update.hasPaid!==""&& update.paidDateTime!==""&& update.appointmentStatus!==""&& update.link!=="")
        {
            console.log(update)
            axios.post(`http://127.0.0.1:8000/api/deleteapp/${appID}`,update)
            .then(resp=>{
              history.push('/ApplistView')
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
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Appointment Date and Time:</label>
                <input type="text" name="appointmentDateTime" className="form-control" id="formGroupExampleInput" defaultValue={appointmentDateTime} onChange={handleChange}onMouseOver={mount}/>
                {/* <p style={{color: "red"}}>{priceErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Patient ID:</label>
                <input type="text" name="userID" className="form-control" id="formGroupExampleInput" defaultValue={userID} onChange={handleChange} />
                {/* <p style={{color: "red"}}>{shortdescErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Doctor ID:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="doctorID" defaultValue={doctorID} onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Purpose:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="purpose"  defaultValue={purpose}  onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Visited:</label>
                <input type="text" name="visited" className="form-control" id="formGroupExampleInput"  defaultValue={visited} onChange={handleChange} />
                {/* <p style={{color: "red"}}>{shortdescErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Has Paid:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="hasPaid" defaultValue={hasPaid}  onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Paid Date and Time:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="paidDateTime" defaultValue={paidDateTime}    onChange={handleChange}/>
                <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Appointment Status:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="appointmentStatus"defaultValue={appointmentStatus}    onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Link:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="link"defaultValue={link}  onChange={handleChange}/>
                </div>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
             

              
              
              <input type="submit" name="submit" value="Delete" className="btn btn-primary login_button"/>
          </form>  
        </div>
        </div>
    );
};

export default DeleteApp;