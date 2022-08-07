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
                    <td><a href={`/EditUser/${userID}`}>Edit</a></td>
                    <td><a href={`/DeleteUserView/${userID}`}>Delete</a></td>
            if(verified =="banned" )
                {
                    <td><a href={`/UnbanView/${userID}`}>Unban</a></td>
                    
                }
            else{
               <td><a href={`/BanView/${userID}`}>Ban</a></td>
            }
         
        </tr>
       
                
                </tbody>
                </table>
                </div>
        </div>
        
    );
};

export default List;