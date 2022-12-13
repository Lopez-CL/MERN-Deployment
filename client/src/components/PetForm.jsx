import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PetForm = () => {
    const [petName, setPetName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [errors, setErrors] =useState({})
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/createPet',{
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
            <h2>Know a pet needing a home?</h2>
                <form className='form border border-1 border-dark col-4'>
                    <div className='d-flex'>
                        <div className='mx-2'>
                            <label className='form-label' htmlFor='name'>Name:</label>
                            {errors.petName && <p className='error'>{errors.petName.message}</p>}
                            <input className='form-control' id='name' type='text' onChange={(e)=> setPetName(e.target.value)}/><br></br>
                            <label className='form-label' htmlFor='type'>Type:</label>
                            {errors.type && <p className='error'>{errors.type.message}</p>}
                            <input className='form-control' id='type' type='text' onChange={(e)=> setType(e.target.value)}/><br></br>
                            <label className='form-label' htmlFor='description'>Description:</label>
                            {errors.description && <p className='error'>{errors.description.message}</p>}
                            <input className='form-control' id='description' type='text' onChange={(e)=> setDescription(e.target.value)}/><br></br>
                        </div>
                        <div className='mx-5'>
                            <h4>Skills (optional):</h4>
                            <label className='form-label' htmlFor='skill-1'>Skill 1:</label>
                            <input className='form-control' id='skill-1' type='text' onChange={(e)=> setSkillOne(e.target.value)}/><br></br>
                            <label className='form-label' htmlFor='skill-2'>Skill 2:</label>
                            <input className='form-control' id='skill-2' type='text' onChange={(e)=> setSkillTwo(e.target.value)}/><br></br>
                            <label className='form-label' htmlFor='skill-3'>Skill 3:</label>
                            <input className='form-control' id='skill-3' type='text' onChange={(e)=> setSkillThree(e.target.value)}/><br></br>
                        </div>
                    </div>
                    <button className='btn btn-primary mx-3 my-2' onClick={submitHandler}>{<i class="bi bi-upload"></i>} Add Pet</button>
                    {/* <input className='mx-3 my-2 btn btn-primary submit' type='submit' value='Add Pet!'/> */}
                </form>
        </div>
    )
}

export default PetForm