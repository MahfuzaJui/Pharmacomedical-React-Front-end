import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListItem() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getitem();
    }, []);

    function getitem() {
        axios.get(`http://localhost:3000/api/item/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8888/api/item/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Edit item</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input value={inputs.itemName} type="text" name="itemName" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Price: </label>
                            </th>
                            <td> 
                                <input value={inputs.price} type="text" name="price" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}