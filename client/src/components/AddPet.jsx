import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const AddPet = () => {

    const navigate = useNavigate();

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescripton] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [valErrors, setValErrors] = useState({});

    const submitHandler = e =>{
        e.preventDefault();

        const petObj = {petName, petType, petDescription, skill1, skill2, skill3}

        axios.post("http://localhost:8000/api/pets", petObj)
        .then(response => {
            console.log("Successfully Posted!", response)
            navigate("/");

        })
        .catch(error => {
            console.log(error.response.data.errors);
            const errorResponse = error.response.data.errors
            const errObj = {
                petNameErr: errorResponse.petName?.message,
                petTypeErr: errorResponse.petType?.message,
                petDescErr: errorResponse.petDescription?.message
            }
            setValErrors(errObj);
        })
    }

    return (
        <div className='row'>
            <div className="col-3"/>
            <div className="col-6">
                <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>
            <Link to="/">Go back to home</Link>
            <form onSubmit={submitHandler}>
                
            <div className="form-group">
                <label>Pet Name:</label>
                <input type="text" className='form-control' onChange={e=>setPetName(e.target.value)} value={petName}/>
            </div>
            {
                <p>{valErrors?.petNameErr}</p>
            }

            <div className="form-group">
                <label>Pet Type:</label>
                <input type="text" className='form-control' onChange={e=>setPetType(e.target.value)} value={petType}/>
            </div>
            {
                <p>{valErrors?.petTypeErr}</p>
            }

            <div className="form-group">
                <label>Pet Description:</label>
                <input type="text" className='form-control' onChange={e=>setPetDescripton(e.target.value)} value={petDescription}/>
            </div>
            {
                <p>{valErrors?.petDescErr}</p>
            }


            <div className="form-group">
                <label>Skill 1:</label>
                <input type="text" className='form-control' onChange={e=>setSkill1(e.target.value)} value={skill1}/>
            </div>
            <div className="form-group">
                <label>Skill 2:</label>
                <input type="text" className='form-control' onChange={e=>setSkill2(e.target.value)} value={skill2}/>
            </div>
            <div className="form-group">
                <label>Skill 3:</label>
                <input type="text" className='form-control' onChange={e=>setSkill3(e.target.value)} value={skill3}/>
            </div>
            <br/>
            <button className='btn btn-outline-success'>Submit</button>

            </form>
            </div>
            <div className="col-3"/>
        </div>
    )
}

export default AddPet