import React , {useState, useEffect} from "react";
import axios from 'axios';
import Applist from './Applist';

const ApplistView = ()=>{
const [apps, setApps] = useState([]);

useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/appointmentlist")
    .then(resp=>{
        console.log(resp);
        setApps(resp.data);
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
            <th>Patient ID</th>
            <th>Appointment Date & Time</th>
            <th>Purpose</th>
            <th>Visited</th>
            <th>Payment Status</th>
            <th>Payment Day & Time</th>
            <th>Appointment Status</th>
            <th>Link</th>
        </tr>
                </thead>
                </table>
                </div>
        {
            apps.map(apps=><Applist apps = {apps}></Applist>
            )
        }
    </div>

)

}
export default ApplistView;