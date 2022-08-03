import React , {useState, useEffect} from "react";
import axios from 'axios';
import DocReviews from './DocReviews';

const DocReviewsView = ()=>{
const [reviews, setReviews] = useState([]);

useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/docreviews")
    .then(resp=>{
        console.log(resp);
        setReviews(resp.data);
    }).catch(err=>{
    console.log(err);
    });
},[]);
return(
    <div className="row">
        <div id="screen">
        <table class="table table-striped" >
            <thead className="col-md-1">
            <tr>
            <th>Patient ID</th>
            <th>Doctor ID</th>
            <th>Description</th>
            <th>Rating</th>
        
        
        </tr>
                </thead>
                </table>
                </div>
        {
            reviews.map(reviews=><DocReviews reviews = {reviews}></DocReviews>
            )
        }
    </div>

)

}
export default DocReviewsView;