import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = (props) => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <NavLink className='mx-2' to='/'>Back to Home</NavLink>
            </div>
        </div>
    )
}

export default NavBar