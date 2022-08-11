import React , {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate  } from "react-router-dom"
import Instance from "./Instance";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const CreateItem = ()=>{
    let[itemName, setName] = useState("");
    let[price, setPrice] = useState("");
    let[userID, setUserID] = useState("");
    const navigate  = useNavigate("");
    function validateForm() {
        return itemName.length > 0 && price.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    
    const createItemSubmit= ()=>{
        var obj = {itemName: itemName, price: price, userID: userID};
        Instance.post("/createItemSubmit",obj)
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            localStorage.setItem('token',token);
            if(token == "Item already exists"){
                navigate('/createItem');
            }else{
                navigate('/itemList');
            }
        }).catch(err=>{
            console.log(err);
        });
    }
    return (
        <div class="container mt-5" style={{backgroundColor: "#EBEDEF", width: "500px", border: "outset"}} > 
        <center>
        <nav>
          <ul>
            <li>
            <Link to="/listItem">listItem</Link>
            </li>
            <li>
            <Link to="/item/:id/edit">editItem</Link>
            </li>
          </ul>
        </nav>
        </center>
        <h2>Add Item</h2> 
        <Form onSubmit={handleSubmit}>
                <div class="form-group" onChange={(e) => setName(e.target.value)}>
                    <label for="itemName">Name</label>
                    <input type="text" class="form-control" id="itemName" name="itemName" placeholder="Enter itemName" />
                </div>
                <div class="form-group" onChange={(e) => setPrice(e.target.value)}>
                    <label for="price">Price</label>
                    <input type="price" class="form-control" id="price" name="price" placeholder="Enter price" />
                </div>
                <div class="form-group" onChange={(e) => setUserID(e.target.value)}>
                    <label for="userID">userID</label>
                    <input type="userID" class="form-control" id="userID" name="userID" placeholder="Enter userID" />
                </div>
                <div class="form-group p-1" onClick={createItemSubmit} disabled={!validateForm()}>
                <input type="submit" name="submit" value="Add" class="btn btn-info" style={{background: "#31D2F2", padding: "10px", width: "100% "}} />
                </div>

        </Form>
    </div>
    )
}
export default CreateItem;