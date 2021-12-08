import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import GradientForm from '../../components/GradientForm/GradientForm'

function EditGradient() {
    const { editId } = useParams();
    const { gradients } = useSelector(state => state)
    let gradient = gradients.find((el) => (el.id === editId));
    if(!!gradients && !!editId)
        return (
            <GradientForm gradient={gradient}/>
        )
    else return (
        <div>Loading...</div>
    )
}

export default EditGradient
