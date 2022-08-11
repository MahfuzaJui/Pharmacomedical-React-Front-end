import React from 'react';
// import { Link } from 'react-router-dom';


const DocReviews = (props) => {
    const {doctorReviewID,userID, doctorID,description,point } = props.reviews;
    return ( 
    
                <tbody>
                    <tr>
                    <td scope="row" class="col-1">{userID}</td>
                    <td class="col-1">{doctorID}</td>
                    <td class="col-1">{description}</td>
                    <td class="col-1">{point}</td>
                    <td><a href={`/DeleteReviewView/${doctorReviewID}`}>Delete</a></td>
                
                    </tr>
                
                </tbody>
            
        
    );
};

export default DocReviews;