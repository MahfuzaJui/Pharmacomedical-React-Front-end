import React from 'react';
// import { Link } from 'react-router-dom';


const DocReviews = (props) => {
    const {userID, doctorID,description,point } = props.reviews;
    return ( 
        <div id='screen' >

            <div id="screen">
            <table  class="table table-striped">
        
                <tbody className='col-md-1'>
                    <tr>
                    <td scope="row" class="col-1">{userID}</td>
                    <td class="col-1">{doctorID}</td>
                    <td class="col-1">{description}</td>
                    <td class="col-1">{point}</td>
                
                    </tr>
                
                </tbody>
                </table>
                </div>
        </div>
        
    );
};

export default DocReviews;