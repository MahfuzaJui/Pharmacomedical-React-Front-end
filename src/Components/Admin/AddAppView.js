import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';
// import Header from '../Header';
import { useNavigate } from 'react-router-dom'
import AddApp from './AddApp';

const AddAppView = () => {
    //const id=localStorage.getItem('userID');
    const {appID}=useParams();
    const [app,setApp]=useState([]);
    console.log(app)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/addapp`)
        .then(res=>{
            setApp(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <AddApp app={app}/>
        </div>
    );
};

export default AddAppView;