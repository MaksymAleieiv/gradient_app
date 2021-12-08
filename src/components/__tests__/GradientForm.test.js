import { render, screen, cleanup } from '@testing-library/react';
import {BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer'

import { Provider } from 'react-redux';
import { store } from '../../store/index'
import GradientForm from '../GradientForm/GradientForm';

afterEach(() => {
    cleanup();
})

test('gradient form create snapshot, i want to die', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Router>
                <GradientForm/>
            </Router>
        </Provider>
            ).toJSON();
    expect(tree).toMatchSnapshot();
})

test('gradient form edit snapshot, i want to die', () => {
    const gradient = { id: '10', firstColor: '#fff', secondColor: '#000' };
    const tree = renderer.create(
        <Provider store={store}>
            <Router>
                <GradientForm gradient={gradient}/>
            </Router>
        </Provider>
            ).toJSON();
    expect(tree).toMatchSnapshot();
})

test('create new gradient form render, initially button should be disabled, i want to die', () => {
    render(
        <Provider store={store}>
            <Router>
                <GradientForm/>
            </Router>
        </Provider>
    )
    const formEl = screen.getByTestId('form');
    expect(formEl).toBeInTheDocument();
    expect(formEl).toHaveTextContent('Add Gradient');
    expect(formEl).toContainHTML('<div data-testid="form"><form action="#" class="gradient-form"><div class="gradient-form__inner"><div class="gradient-form-input-holder"><input name="firstColor" class="gradient-form-input undefined" value=""><div class="gradient-form-error"></div></div><div class="gradient-form-input-holder"><input name="secondColor" class="gradient-form-input undefined" value=""><div class="gradient-form-error"></div></div></div><button type="submit" disabled="" class="gradient-form-submit error"> Add Gradient</button></form></div>');
})

test('edit existing gradient form render, initially button should not be disabled, i want to die', () => {
    const gradient = { id: '1638989386828', firstColor: '#321', secondColor: '#123' };
    render(
        <Provider store={store}>
            <Router>
                <GradientForm gradient={gradient}/>
            </Router>
        </Provider>
    )
    const formEl = screen.getByTestId('form');
    expect(formEl).toBeInTheDocument();
    expect(formEl).toHaveTextContent('Save Changes');
    expect(formEl).toContainHTML('<div data-testid="form"><form action="#" class="gradient-form"><div class="gradient-form__inner"><div class="gradient-form-input-holder"><input name="firstColor" class="gradient-form-input undefined" value="#321"><div class="gradient-form-error"></div></div><div class="gradient-form-input-holder"><input name="secondColor" class="gradient-form-input undefined" value="#123"><div class="gradient-form-error"></div></div></div><button type="submit" class="gradient-form-submit"> Save Changes</button></form></div>');
})