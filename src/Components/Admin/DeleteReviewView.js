
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import DeleteReview from './DeleteReview';
import { useNavigate } from 'react-router-dom'

const DeleteReviewView =() => {
    //const id=localStorage.getItem('userID');
    const {doctorReviewID}=useParams();
    const [review,setReview]=useState([]);
    console.log(review)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/deletereview/${doctorReviewID}`)
        .then(res=>{
            setReview(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <DeleteReview review={review}/>
        </div>
    );
};

export default DeleteReviewView;