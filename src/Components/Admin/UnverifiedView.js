import React , {useState, useEffect} from "react";
import axios from 'axios';
import Unverified from './Unverified';

const UnverifiedView = ()=>{
const [unverifieds, setUnverifieds] = useState([]);

useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/unverified")
    .then(resp=>{
        console.log(resp);
        setUnverifieds(resp.data);
    }).catch(err=>{
    console.log(err);
    });
},[]);
return(
    <div className="row">
        <div id="screen">
        <table class="table table-striped" >
            <thead className="col-md-1">
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Role</th>
        </tr>
                </thead>
                </table>
                </div>
        {
            unverifieds.map(unverifieds=><Unverified unverifieds = {unverifieds}></Unverified>
            )
        }
    </div>

)

}
export default UnverifiedView;