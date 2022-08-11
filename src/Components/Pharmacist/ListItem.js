import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListItem() {

    const [items, setitems] = useState([]);
    useEffect(() => {
        getitems();
    }, []);

    function getitems() {
        axios.get('http://127.0.0.1:8000/api/items').then(function(response) {
            console.log(response.data);
            setitems(response.data);
        });
    }

    const deleteitem = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/item/${id}/delete`).then(function(response){
            console.log(response.data);
            getitems();
        });
    }
    return (
        <div>
            <h1>List items</h1>
            <table>
                <thead>
                    <tr>
                        <th>ItemName</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, key) =>
                        <tr key={key}>
                            <td>{item.pharmaceuticalItemID}</td>
                            <td>{item.itemName}</td>
                            <td>{item.userID}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`item/${item.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteitem(item.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}