import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';
// import Header from '../Header';

import { useNavigate } from 'react-router-dom'

const DeleteReview =  (props) => {
    const{doctorReviewID,userID,doctorID,description,point}=props.review
    const aid=localStorage.getItem('doctorReviewID')
    const [update,setUpdate ]=useState({
        doctorReviewID:"",
        userID:"",
        doctorID:"",
        description:"",
        point:"",
    
    

    });
    //update.name=uid;

    const mount=()=>{
        setUpdate(
            {
                ...update,
                doctorReviewID:doctorReviewID,
                userID:userID,
                doctorID:doctorID,
                description:description,
                point:point,
             
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
        if(update.userID!=="" && update.doctorID!=="" && update.doctorID!=="" && update.description!==""&& update.point!=="")
        {
            console.log(update)
            axios.post(`http://127.0.0.1:8000/api/deletereview/${doctorReviewID}`,update)
            .then(resp=>{
              history.push('/DocReviewsView')
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
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Patient ID:</label>
                <input type="text" name="userID" className="form-control" id="formGroupExampleInput" defaultValue={userID} onChange={handleChange}onMouseOver={mount}/>
                {/* <p style={{color: "red"}}>{priceErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Doctor ID:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="doctorID" defaultValue={doctorID} onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}>Description:</label>
                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" name="description"  defaultValue={description}  onChange={handleChange}/>
                {/* <p style={{color: "red"}}>{descErr}</p> */}
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label" style={{marginTop: "20px"}}> Point:</label>
                <input type="text" name="point" className="form-control" id="formGroupExampleInput"  defaultValue={point} onChange={handleChange} />
                {/* <p style={{color: "red"}}>{shortdescErr}</p> */}
              </div>
              

              
              
              <input type="submit" name="submit" value="Delete" className="btn btn-primary login_button"/>
          </form>  
        </div>
        </div>
    );
};

export default DeleteReview;