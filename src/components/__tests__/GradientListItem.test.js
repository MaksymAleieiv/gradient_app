import { cleanup } from '@testing-library/react';
import {BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer'
import GradientListItem from '../GradientListItem/GradientListItem';

import { Provider } from 'react-redux';
import { store } from '../../store/index'

afterEach(() => {
    cleanup();
})

test('gradient list item snapshot, i want to die', () => {
    const gradient = { id: '10', firstColor: '#fff', secondColor: '#000' };
    const tree = renderer.create(
        <Provider store={store}>
            <Router>
                <GradientListItem gradient={gradient}/>
            </Router>
        </Provider>
            ).toJSON();
    expect(tree).toMatchSnapshot();
})