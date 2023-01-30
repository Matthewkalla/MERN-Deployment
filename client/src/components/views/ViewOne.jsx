import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from '../DeleteButton';


const ViewOne = () => {

    const {id} = useParams();

    const [pet, setPet] = useState({});

    useEffect(() => {
        console.log(id);
        axios.get("http://localhost:8000/api/pet/"+id)
        .then(res => {
            console.log(res.data)
            setPet(res.data)
        })
        .catch(error => {
            console.log("Something's wrong cap't!", error)
        })
    }, [])

    return (
        <div className='row'>
            <div className="col-3"/>
            <div className="col-6">
                <h1>Shelter</h1>
                <h3>Details About: {pet.petName}</h3>
                <Link to="/">Go back</Link>
                <hr></hr>
                <p>Pet Type: {pet.petType}</p>
                <p>Description: {pet.petDescription}</p>
                <p>Skills: </p>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
                <DeleteButton petId={id}/>
            </div>
            <div className="col-3"/>

        </div>
    )
}

export default ViewOne