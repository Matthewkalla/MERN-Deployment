import React, {useEffect, useState} from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios'

const Edit = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescripton] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [displayName, setDisplayName] = useState("");



    const [valErrors, setValErrors] = useState({})

    useEffect(() => {
        console.log(id);
        axios.get("http://localhost:8000/api/pet/"+id)
        .then(res => {
            setPetName(res.data.petName)
            setPetType(res.data.petType)
            setPetDescripton(res.data.petDescription)
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
            setDisplayName(res.data.petName)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const submitHandler = e => {
        e.preventDefault();

        const petObj = {petName, petType, petDescription, skill1, skill2, skill3};

        axios.put("http://localhost:8000/api/pet/"+id, petObj)
        .then(message => {
            console.log("Successfully Updated!", message);
            navigate("/")
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
                <Link to="/">back to home</Link>
                <h3>Edit {displayName}</h3>

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
            <button className='btn btn-outline-success'>Update</button>

            </form>

            </div>
            <div className="col-3"/>

        </div>
    )
}

export default Edit