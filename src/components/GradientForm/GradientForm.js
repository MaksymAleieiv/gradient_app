import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { gradientsList_ActionCreators } from '../../store/reducers/gradients-list/gradientsList_ActionCreators'

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
                    <Form>
                        <Field name='firstColor' validate={validateHex}/>
                        {errors.firstColor && touched.firstColor && <div>{errors.firstColor}</div>}
                        <Field name='secondColor' validate={validateHex}/>
                        {errors.secondColor && touched.secondColor && <div>{errors.secondColor}</div>}
                        <button type='submit'> {gradient.firstColor ? 'Save' : 'Add'}</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default GradientForm
