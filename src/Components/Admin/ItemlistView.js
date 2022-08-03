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
    <div className="row">
        <div id="">
        <table class="table table-striped" >
            <thead className="col-md-1">
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Item ID</th>
            <th>Pharmacist ID</th>
        
        
        </tr>
                </thead>
                </table>
                </div>
        {
            items.map(items=><Itemlist items = {items} />
            )
        }
    </div>

)

}
export default ItemlistView;