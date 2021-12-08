import React from 'react'
import { Link } from 'react-router-dom'
import GradientList from '../../components/GradientList/GradientList'

function Home() {
    return (
        <div>
            <GradientList/>
            <Link to='/new'>Add Gradient</Link>
        </div>
    )
}

export default Home
