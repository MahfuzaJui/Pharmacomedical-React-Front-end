import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';
// import Header from '../Header';
import { useNavigate } from 'react-router-dom'
import AddUser from './AddUser';

const AddUserView = () => {
    //const id=localStorage.getItem('userID');
    // const {userID}=useParams();
    const [user,setUser]=useState([]);
    console.log(user)
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/addUser`)
        .then(res=>{
            setUser(res.data)
            console.log(res.data)
        })
    },[]);
    return (
        <div>
            <AddUser user={user}/>
        </div>
    );
};

export default AddUserView;