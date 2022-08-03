import React from 'react';
// import { Link } from 'react-router-dom';


const Unverified = (props) => {
    const { name, email, phoneNumber,dob, gender, role } = props.unverifieds;
    return ( 
        <div id='screen' >

            <div id="screen">
            <table  class="table table-striped">
        
                <tbody className='col-md-1'>
                    <tr>
                    <td scope="row" class="col-1">{name}</td>
                    <td class="col-1">{email}</td>
                    <td class="col-1">{phoneNumber}</td>
                    <td class="col-1">{dob}</td>
                    <td class="col-1">{gender}</td>
                    <td class="col-1">{role}</td>
                    
                    </tr>
                
                </tbody>
                </table>
                </div>
        </div>
        
    );
};

export default Unverified;