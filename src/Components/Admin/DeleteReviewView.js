
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import { useNavigate } from 'react-router-dom'

const DeleteReviewView =() => {
    let navigate = useNavigate();

    const {doctorReviewID}=useParams();
    const [review,setReview]=useState([]);
    console.log(review)
    if(
        axios.get(`http://127.0.0.1:8000/api/deletereview/${doctorReviewID}`).then(resp=>{
            console.log(resp.data);
            setReview(resp.data);
        }).catch(err=>{
            console.log(err);
        })
   )
    {
        navigate("/DocReviewsView");
        
    }
    return (
        <div>
            
        </div>
    );
};

export default DeleteReviewView;