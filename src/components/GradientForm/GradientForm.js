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
        <div data-testid='form'>
            <Formik
                initialValues={{
                    firstColor: gradient.firstColor || '',
                    secondColor: gradient.secondColor || ''
                }}
                onSubmit={onSubmit}
            >
                {({errors, touched, isValid, dirty}) => (
                    <Form className='gradient-form'>
                        <div className='gradient-form__inner'>
                            <div className='gradient-form-input-holder'>
                                <Field name='firstColor' validate={validateHex} className={`gradient-form-input ${touched.firstColor && errors.firstColor && 'error'}`}/>
                                <div className='gradient-form-error'>{touched.firstColor && errors.firstColor}</div>
                            </div>
                            <div className='gradient-form-input-holder'>
                                <Field name='secondColor' validate={validateHex} className={`gradient-form-input ${touched.secondColor && errors.secondColor && 'error'}`}/>
                                <div className='gradient-form-error'>{touched.secondColor && errors.secondColor}</div>
                            </div>
                        </div>
                        {!!gradient.id ? (
                            <button type='submit' disabled={!isValid} className={(isValid) ? 'gradient-form-submit' : 'gradient-form-submit error'}> {gradient.firstColor ? 'Save Changes' : 'Add Gradient'}</button>
                        ) : (
                            <button type='submit' disabled={!(isValid && dirty)} className={(isValid && dirty) ? 'gradient-form-submit' : 'gradient-form-submit error'}> {gradient.firstColor ? 'Save Changes' : 'Add Gradient'}</button>
                        )}
                        
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default GradientForm
