import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const PetUpdate = () => {
    const [petName, setPetName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [pet, setPet] = useState({});
    const [errors, setErrors] =useState({})
    const navigate = useNavigate();
    const {_id} =useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getPet/${_id}`)
        .then((res) => {
            setPet(res.data)
            setPetName(res.data.petName)
            setType(res.data.type)
            setDescription(res.data.description)
            setSkillOne(res.data.skillOne)
            setSkillTwo(res.data.skillTwo)
            setSkillThree(res.data.skillThree)
        })
        .catch((err)=>{
            console.log(err)
            console.log('error caught on the front-end!')
        })
    },[])
    const updateHandler = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updatePet/${_id}`,{
            petName,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
        .then((res)=> {
            console.log(res.data)
            console.log('catch from the back-end')
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
            console.log('error caught on the front-end!')
            setErrors(err.response.data.errors);
            
        })
    }
    return (
        <div>
            <h2>Edit {pet.petName}</h2>
                <form className='form border border-1 border-dark col-4'>
                    <div className='d-flex'>
                        <div className='mx-2'>
                            <label className='form-label' htmlFor='name'>Name:</label>
                            {errors.petName && <p className='error'>{errors.petName.message}</p>}
                            <input className='form-control' id='name' type='text' onChange={(e)=> setPetName(e.target.value)} value={petName}/><br></br>
                            <label className='form-label' htmlFor='type'>Type:</label>
                            {errors.type && <p className='error'>{errors.type.message}</p>}
                            <input className='form-control' id='type' type='text' onChange={(e)=> setType(e.target.value)} value={type}/><br></br>
                            <label className='form-label' htmlFor='description'>Description:</label>
                            {errors.description && <p className='error'>{errors.description.message}</p>}
                            <input className='form-control' id='description' type='text' onChange={(e)=> setDescription(e.target.value)} value={description}/><br></br>
                        </div>
                        <div className='mx-5'>
                            <h4>Skills (optional):</h4>
                            <label className='form-label' htmlFor='skill-1'>Skill 1:</label>
                            <input className='form-control' id='skill-1' type='text' onChange={(e)=> setSkillOne(e.target.value)} value={skillOne}/><br></br>
                            <label className='form-label' htmlFor='skill-2'>Skill 2:</label>
                            <input className='form-control' id='skill-2' type='text' onChange={(e)=> setSkillTwo(e.target.value)} value={skillTwo}/><br></br>
                            <label className='form-label' htmlFor='skill-3'>Skill 3:</label>
                            <input className='form-control' id='skill-3' type='text' onChange={(e)=> setSkillThree(e.target.value)} value={pet.skillThree}/><br></br>
                        </div>
                    </div>
                    <button className='btn btn-primary mx-3 my-2' onClick={updateHandler}>{<i class="bi bi-pencil-fill"></i>} Edit Pet</button>
                    {/* <input className='mx-3 my-2 btn btn-primary submit' type='submit' value='Add Pet!'/> */}
                </form>
        </div>
    )
}

export default PetUpdate