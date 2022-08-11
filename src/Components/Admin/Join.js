import React from 'react';
import { Link } from 'react-router-dom';
import Instance from './Instance';


const Join = (props) => {
    const { appID, userID, name,doctorID, appointmentDateTime, purpose, link} = props.app;
    return ( 
    
        <tbody>
        <tr>
                    <td>{userID}</td>
                    <td class="col-1">{appID}</td>
                    <td class="col-1">{doctorID}</td>
                    <td class="col-1">{name}</td>
                    <td class="col-1">{appointmentDateTime}</td>
                    <td class="col-1">{purpose}</td>
                    <td><a href={link}>{link}</a></td>
                    <td><a href={`/EditAppView/${appID}`}>Edit</a></td>
                    <td><Link to={`/DeleteAppView/`+appID}> Delete</Link></td>
                    </tr>
                
                </tbody>
            
        
    );
};

export default Join;