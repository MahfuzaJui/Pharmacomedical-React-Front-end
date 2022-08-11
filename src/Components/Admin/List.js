import React from 'react';
import { Link } from 'react-router-dom';


const List = (props) => {
    const { userID, name, email, phoneNumber, password, dob, gender, role, verified } = props.users;
    return ( 

        
                <tbody className='table-primary' >
                    <tr className='table-primary'>
                    <td >{userID}</td>
                    <td class="col-1">{name}</td>
                    <td class="col-1">{email}</td>
                    <td class="col-1">{phoneNumber}</td>
                    <td class="col-1">{password}</td>
                    <td class="col-1">{dob}</td>
                    <td class="col-1">{gender}</td>
                    <td class="col-1">{role}</td>
                    <td><a href={`/EditUser/${userID}`}>Edit</a></td>
                    {
                    verified =="banned" ? 
                    (<td><a href={`/UnbanView/${userID}`}>Unban</a></td>) 
                    : 
                    (<td><Link to={`/BanView/`+userID}> Ban</Link></td>)
                    }
                    <td><Link to={`/DeleteUserView/`+userID}> Delete</Link></td>
         
        </tr>
       
                
                </tbody>
                
  
    );
};

export default List;