import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'

const AcceptView = () => {
    //const id=localStorage.getItem('userID');
    let navigate = useNavigate();
    const {userID}=useParams();
    const [user,setUser]=useState([]);
    console.log(user)
    if(
        axios.get(`http://127.0.0.1:8000/api/accept/${userID}`).then(resp=>{
            console.log(resp.data);
            setUser(resp.data);
        }).catch(err=>{
            console.log(err);
        })
   )
    {
        navigate("/UnverifiedView");
        
    }
    return (
        <div>
            
        </div>
    );
};
export default AcceptView;