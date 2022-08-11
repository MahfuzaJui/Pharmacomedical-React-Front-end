
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'

const DeleteAppView =() => {
    let navigate = useNavigate();
    const {appID}=useParams();
    const [app,setApp]=useState([]);
    console.log(app)
    if(
        axios.get(`http://127.0.0.1:8000/api/deleteapp/${appID}`).then(resp=>{
            console.log(resp.data);
            setApp(resp.data);
        }).catch(err=>{
            console.log(err);
        })
   )
    {
        navigate("/JoinView");
        
    }
    return (
        <div>
            
        </div>
    );
};

export default DeleteAppView;