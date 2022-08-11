import React , {useState, useEffect} from "react";
import axios from 'axios';
import List from './List';
import Instance from "./Instance";
import AddUserView from "./AddUserView";

const ListView = ()=>{
const [users, setUsers] = useState([]);

useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/list")
    .then(resp=>{
        console.log(resp);
        setUsers(resp.data);
    }).catch(err=>{
    console.log(err);
    });
},[]);
return(
    <div>
        <table class ="table table-border">
            <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Password</th>
                    <th>Date of Birth:</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
            
        {
            users.map(users=><List users = {users}></List>
            )
        }
        </table>
    </div>

)

}
export default ListView;