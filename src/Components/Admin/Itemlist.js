import React from 'react';
// import { Link } from 'react-router-dom';


const Itemlist = (props) => {
    const {itemName,price,pharmaceuticalItemID, userID } = props.items;
    return ( 
    

        
                <tbody>
                    <tr>
                    <td scope="row" class="col-1">{itemName}</td>
                    <td class="col-1">{price}</td>
                    <td class="col-1">{pharmaceuticalItemID}</td>
                    <td class="col-1">{userID}</td>
                    
                    </tr>
                
                </tbody>
            
    
        
    );
};

export default Itemlist;