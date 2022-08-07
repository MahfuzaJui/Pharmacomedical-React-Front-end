
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import DeleteApp from './DeleteApp';
import { useNavigate } from 'react-router-dom'

const DeleteAppView =() => {
    //const id=localStorage.getItem('userID');
    const {appID}=useParams();
    const [app,setApp]=useState([]);
    console.log(app)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/deleteapp/${appID}`)
        .then(res=>{
            setApp(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <DeleteApp app={app}/>
        </div>
    );
};

export default DeleteAppView;