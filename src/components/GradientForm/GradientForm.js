import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { gradientsList_ActionCreators } from '../../store/reducers/gradients-list/gradientsList_ActionCreators'
import './GradientForm.css'

function GradientForm({gradient = {}}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values) => {
        if(!!gradient.id) {
            dispatch(gradientsList_ActionCreators.editGradient({...values, id: gradient.id}))
        }
        else {
            dispatch(gradientsList_ActionCreators.addGradient({...values, id: Date.now().toString()}))
        }
        navigate('/')
    }

    const validateHex = (value) => {
        if(!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) return 'Not HEX';
        else return;
    }

    return (
        <div>
            <Formik
                initialValues={{
                    firstColor: gradient.firstColor || '',
                    secondColor: gradient.secondColor || ''
                }}
                onSubmit={onSubmit}
            >
                {({errors, touched}) => (
                    <Form className='gradient-form'>
                        <div className='gradient-form__inner'>
                            <div className='gradient-form-input-holder'>
                                <Field name='firstColor' validate={validateHex} className='gradient-form-input'/>
                                <div className='gradient-form-error'>{touched.firstColor && errors.firstColor}</div>
                            </div>
                            <div className='gradient-form-input-holder'>
                                <Field name='secondColor' validate={validateHex} className='gradient-form-input'/>
                                <div className='gradient-form-error'>{touched.secondColor && errors.secondColor}</div>
                            </div>
                        </div>
                        <button type='submit' className='gradient-form-submit'> {gradient.firstColor ? 'Save Changes' : 'Add Gradient'}</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default GradientForm
