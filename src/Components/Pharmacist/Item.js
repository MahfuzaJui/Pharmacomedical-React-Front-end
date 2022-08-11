import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { userID, itemName, price} = props.items;
    return ( 
        <div className = "ItemList" >
            <Link to = { "/itemDetails" + "/" + userID +"/" + itemName + "/" + price} > <b> Name: { itemName } </b></Link >
        </div>
    );
};

export default Item;