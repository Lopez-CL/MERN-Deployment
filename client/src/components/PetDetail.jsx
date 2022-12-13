import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const PetDetail = () => {
    const [pet, setPet] = useState({})
    const { _id } = useParams()
    const [likes,setLikes] =useState(0);
    const [likeStatus, setLikeStatus] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/getPet/${_id}`)
            .then(res => {
                setPet(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const removePet = (petId) => {
        axios.delete(`http://localhost:8000/api/deletePet/${petId}`)
            .then(res => {
                navigate('/')
            })
            .catch(err => (console.log(err)))
    }
    const changeLikes = () =>{
        console.log('click');
        setLikes(likes+1);
        setLikeStatus(false);
        console.log(likeStatus)
    }
    return (
        <div>
            <div className='d-flex'>
                <h2>Details About: {pet.petName}</h2>
                <button className='btn btn-danger mx-5' onClick={(e)=> removePet(pet._id)} >{<i class="bi bi-house-door"></i>} Adopt {pet.petName}</button>
            </div>
            <div className=' border border-2 border-dark col-5 px-2 py-2'>
                <p>Pet Type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                Skill: {pet.skillOne ? <span>{pet.skillOne},</span> : <span>None</span>} {pet.skillOne ? <span> {pet.skillTwo}</span> : ''} {pet.skillOne ? <span>{pet.skillThree}</span> : ''}
                <div className='d-flex align-items-center'>
                    {
                    likeStatus?<button className='btn btn-success my-3' onClick={(e) => changeLikes(e)}>{<i class="bi bi-hand-thumbs-up"></i>} Like {pet.petName}</button>:<button className='btn btn-success my-3' disabled>{<i class="bi bi-hand-thumbs-up"></i>} Like {pet.petName}</button>
                    }
                    <p className='my-2'> {likes} likes(s)</p>
                </div>
            </div>
        </div>
    )
}

export default PetDetail