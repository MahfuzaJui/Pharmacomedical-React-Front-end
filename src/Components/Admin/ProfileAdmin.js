import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';
import ProfileAdminView from './ProfileAdminView';
import { useNavigate } from 'react-router-dom'

const ProfileAdmin = () => {
    const id=localStorage.getItem('userId');
   
    const [user,setUser]=useState([]);
    console.log(user)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/profileAdmin`)
        .then(res=>{
            setUser(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <ProfileAdminView user={user}/>
        </div>
    );
};

export default ProfileAdmin;