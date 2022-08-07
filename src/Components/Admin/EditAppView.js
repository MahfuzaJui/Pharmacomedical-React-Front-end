
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import EditApp from './EditApp';
import { useNavigate } from 'react-router-dom'

const EditAppView =() => {
    //const id=localStorage.getItem('userID');
    const {appID}=useParams();
    const [app,setApp]=useState([]);
    console.log(app)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/editapp/${appID}`)
        .then(res=>{
            setApp(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <EditApp app={app}/>
        </div>
    );
};

export default EditAppView;