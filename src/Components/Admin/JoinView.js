import React , {useState, useEffect} from "react";
import axios from 'axios';
import Join from './Join';
import Instance from './Instance';

const JoinView = ()=>{
const [app, setApp] = useState([]);

useEffect(()=>{
    Instance.get("http://127.0.0.1:8000/api/Doctorsapps")
    .then(resp=>{
        console.log(resp);
        setApp(resp.data);
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
            <th>Application ID</th>
            <th>Doctor ID</th>
            <th>Doctor Name</th>
            <th>Patient ID</th>
            <th>Appointment Date & Time</th>
            <th>Purpose</th>
            
            <th>Link</th>
        </tr>
                </thead>
                </table>
                </div>
        {
            app.map(app=><Join app = {app}></Join>
            )
        }
    </div>

)

}
export default JoinView;