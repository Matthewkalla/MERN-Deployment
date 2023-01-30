import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const DisplayPets = () => {

    const [petList, setPetList] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res => {
            console.log("we're getting the data!: ", res.data)
            setPetList(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <div className='row'>
            <div className="col-3"/>
            <div className="col-6">
                <h1>Pet Shelter</h1>
                <h5>These pets are looking for a home</h5>
                <Link to="/addPet">Add a pet to the shelter</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            petList.map((pet, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{pet.petName}</td>
                                        <td>{pet.petType}</td>
                                        <td><Link className='btn btn-outline-info' to={`/pet/${pet._id}`}>details</Link> |
                                        <Link to={`/pet/edit/${pet._id}`} className="btn btn-outline-warning">Edit</Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
            <div className="col-3"/>

        </div>
    )
}

export default DisplayPets