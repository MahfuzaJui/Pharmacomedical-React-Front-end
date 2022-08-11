import React , {useState, useEffect} from "react";
import axios from 'axios';
import Itemlist from './Itemlist';

const ItemlistView = ()=>{
const [items, setItems] = useState([]);

useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/Itemlist")
    .then(resp=>{
        console.log(resp);
        setItems(resp.data);
    }).catch(err=>{
    console.log(err);
    });
},[]);
return(
    <div>
    
        <table class="table table-striped" >
            <thead>
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Item ID</th>
            <th>Pharmacist ID</th>
        
        
        </tr>
            </thead>
            
            
        {
            items.map(items=><Itemlist items = {items} />
            )
        }
        </table>
    </div>

)

}
export default ItemlistView;