import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = (props) =>{
    const {userID} = useParams();
    const {itemName} = useParams();
    const {price} = useParams();
    
    return(
        <div className = 'ItemDetails'>
            <h1>This is item Details</h1>
            <br/>
            <p>UserID: {userID}</p>
            <p>Item Name: {itemName}</p>
            <p>Item Price: {price}</p>
        </div>
    );
};
export default ItemDetails;