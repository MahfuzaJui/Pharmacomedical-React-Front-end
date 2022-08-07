import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import Ban from './Ban';
import { useNavigate } from 'react-router-dom'

const BanView = () => {
    //const id=localStorage.getItem('userID');
    const {userID}=useParams();
    const [user,setUser]=useState([]);
    console.log(user)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/ban/${userID}`)
        .then(res=>{
            setUser(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <Ban user={user}/>
        </div>
    );
};

export default BanView;