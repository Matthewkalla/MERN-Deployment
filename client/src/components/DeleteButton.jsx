import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteButton = (props) => {

    const navigate = useNavigate();

    const {petId, successCallback} = props;

    const deletePet = e => {
        console.log("deleteting pet: " + petId);
        axios.delete("http://localhost:8000/api/pet/"+petId)
        .then(message => {
            console.log(message)
            navigate("/");
        })
        .catch(err => console.log(err));
    }
    
    return (
        <div>
            <button className='btn btn-outline-danger' onClick={deletePet}>Adopt</button>
        </div>
    )
}

export default DeleteButton