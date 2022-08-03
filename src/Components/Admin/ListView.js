import React , {useState, useEffect} from "react";
import axios from 'axios';
import List from './List';

const ListView = ()=>{
const [users, setUsers] = useState([]);

useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/Users/list")
    .then(resp=>{
        console.log(resp);
        setUsers(resp.data);
    }).catch(err=>{
    console.log(err);
    });
},[]);
return(
    <div className="row">
        <div id="screen">
        <table class="table table-striped" id="list">
            <thead className="col-md-1">
                    <tr>
                    <th scope="col" class="col-1">ID</th>
                    <th class="col-1">Name</th>
                    <th scope="col" class="col-1">Email</th>
                    <th scope="col" class="col-1">Phone Number</th>
                    <th scope="col" class="col-1">Password</th>
                    <th scope="col" class="col-1">Date of Birth:</th>
                    <th scope="col" class="col-1">Gender</th>
                    <th scope="col" class="col-1">Role</th>
                    </tr>
                </thead>
                </table>
                </div>
        {
            users.map(users=><List users = {users}></List>
            )
        }
    </div>

)

}
export default ListView;