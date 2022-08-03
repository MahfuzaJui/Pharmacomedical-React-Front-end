import React from 'react';
// import { Link } from 'react-router-dom';


const Applist = (props) => {
    const { appID, doctorID, userID,appointmentDateTime, purpose, visited, hasPaid, paidDateTime, appointmentStatus } = props.apps;
    return ( 
        <div id='screen' >

            <div id="screen">
            <table  class="table table-striped">
        
                <tbody className='col-md-1'>
                    <tr>
                    <td scope="row" class="col-1">{appID}</td>
                    <td class="col-1">{doctorID}</td>
                    <td class="col-1">{userID}</td>
                    <td class="col-1">{appointmentDateTime}</td>
                    <td class="col-1">{purpose}</td>
                    <td class="col-1">{visited}</td>
                    <td class="col-1">{hasPaid}</td>
                    <td class="col-1">{paidDateTime}</td>
                    <td class="col-1">{appointmentStatus}</td>
                    </tr>
                
                </tbody>
                </table>
                </div>
        </div>
        
    );
};

export default Applist;