import React from 'react'
import { Link } from 'react-router-dom'
import GradientList from '../../components/GradientList/GradientList'
import './Home.css'

function Home() {
    return (
        <div>
            <GradientList/>
            <Link to='/new' className='add-gradient-button'>Add Gradient</Link>
        </div>
    )
}

export default Home
