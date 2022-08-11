import React , {useState, useEffect} from "react";
import Item from './Item';
import Instance from "./Instance";

const ItemList = ()=>{
const [items, setItems] = useState([]);

useEffect(()=>{
    Instance.get("/Items/list")
    .then(resp=>{
    console.log(resp.data);
    setItems(resp.data);
     }).catch(err=>{
    console.log(err);
});
},[]);

return(
    <div>
        {
            items.map(items=>
                <Item items = {items}></Item>
            )
        }
    </div>
)

}
export default ItemList;