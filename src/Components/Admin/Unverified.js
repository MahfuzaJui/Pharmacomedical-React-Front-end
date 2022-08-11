import React from 'react';
// import { Link } from 'react-router-dom';


const Unverified = (props) => {
    const { userID, name, email, phoneNumber,dob, gender, role } = props.unverifieds;
    return ( 
        
                <tbody>
                    <tr>
                    <td >{name}</td>
                    <td class="col-1">{email}</td>
                    <td class="col-1">{phoneNumber}</td>
                    <td class="col-1">{dob}</td>
                    <td class="col-1">{gender}</td>
                    <td class="col-1">{role}</td>
                    <td><a href={`/AcceptView/${userID}`}>Accept</a></td>
                    <td><a href={`/DeclineView/${userID}`}>Decline</a></td>
                   
                    </tr>
                
                </tbody>
                
        
    );
};

export default Unverified;