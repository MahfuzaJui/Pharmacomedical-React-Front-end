import React from 'react';
// import { Link } from 'react-router-dom';
import Instance from './Instance';


const Join = (props) => {
    const { appID, userID, name,doctorID, appointmentDateTime, purpose, link} = props.app;
    return ( 
        <div id='screen' >

            <div id="screen">
            <table  class="table table-striped">
        
                <tbody className='col-md-1'>
                    <tr>
                    <td scope="row" class="col-1">{userID}</td>
                    <td class="col-1">{appID}</td>
                    <td class="col-1">{doctorID}</td>
                    <td class="col-1">{name}</td>
                    <td class="col-1">{appointmentDateTime}</td>
                    <td class="col-1">{purpose}</td>
                    <td class="col-1">{link}</td>
                    <td><a href={`/EditAppView/${appID}`}>Edit</a></td>
                    <td><a href={`/DeleteAppView/${appID}`}>Delete</a></td>
                    </tr>
                
                </tbody>
                </table>
                </div>
        </div>
        
    );
};

export default Join;