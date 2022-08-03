import React from 'react';
// import { Link } from 'react-router-dom';


const List = (props) => {
    const { userID, name, email, phoneNumber, password, dob, gender, role, verified } = props.users;
    return ( 
        <div id='screen' >

            <div id="screen">
            <table  class="table table-striped" id='list'>
        
                <tbody className='col-md-1'>
                    <tr>
                    <td scope="row" class="col-1">{userID}</td>
                    <td class="col-1">{name}</td>
                    <td class="col-1">{email}</td>
                    <td class="col-1">{phoneNumber}</td>
                    <td class="col-1">{password}</td>
                    <td class="col-1">{dob}</td>
                    <td class="col-1">{gender}</td>
                    <td class="col-1">{role}</td>
                    <td><a href="/editUser/{{$user->name}}">Edit</a></td>
            <td><a href="/deleteUser/{{$user->name}}">Delete</a></td>
            if(verified =="banned" )
                {
                    <td><a href="/unban/{{$user->name}}">Unban</a></td>
                    
                }
            else{
                <td><a href="/ban/{{$user->name}}">Ban</a></td>
            }
         
        </tr>
       
                
                </tbody>
                </table>
                </div>
        </div>
        
    );
};

export default List;