import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const PetList = () => {
    const [pets, setPets] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getPets')
        .then((res)=>{
            console.log(res.data)
            setPets(res.data)
            console.log('catch from the back-end!')
        })
        .catch((err) =>{
            console.log(err)
            console.log('error is caught on the front-end')
        })
    }, [])
    // const removePet
    return (
        <div>
            <div className='d-flex flex-row-reverse'>
                <nav> <Link to='/pets/new'>Add a pet!</Link></nav>
            </div>
            <h2>These pets are looking for a home</h2>
            <div className='col-4'>
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.map((pet, index) =>(
                                <tr key={index}>
                                    <td>{pet.petName}</td>
                                    <td>{pet.type}</td>
                                    <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link> </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PetList