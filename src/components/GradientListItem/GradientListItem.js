import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { gradientsList_ActionCreators } from '../../store/reducers/gradients-list/gradientsList_ActionCreators'
import './GradientListItem.css'

function GradientListItem({gradient}) {

    const dispatch = useDispatch()

    const removeThisItem = () => {
        dispatch(gradientsList_ActionCreators.removeGradient(gradient))
    }

    return (
        <div style={{background: `linear-gradient(to right, ${gradient.firstColor}, ${gradient.secondColor})`}} className='gradient-block'>
            <div className='gradient-block__colors'>
                <span>{gradient.firstColor}</span>
                <span>{gradient.secondColor}</span>
            </div>
            <div className='gradient-block__buttons'>
                <button className='gradient-block__buttons__remove' onClick={removeThisItem}> </button>
                <Link className='gradient-block__buttons__edit' to={`/edit/${gradient.id}`}/>
            </div>
        </div>
    )
}

export default React.memo(GradientListItem)
