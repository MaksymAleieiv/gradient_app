import React from 'react'
import GradientListItem from '../GradientListItem/GradientListItem'
import { useSelector } from 'react-redux'

function GradientList() {
    const { gradients } = useSelector(state => state);
    if(!!gradients)
        return (
            <div>
                {gradients.map(gradient => (<GradientListItem gradient={gradient} key={gradient.id}/>))}
            </div>
        )
    else return (
        <div>Loading...</div>
    )
}

export default GradientList
