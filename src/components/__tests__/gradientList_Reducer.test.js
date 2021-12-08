
import { cleanup } from '@testing-library/react';
import { gradientsList_Reducer as reducer } from '../../store/reducers/gradients-list/gradientsList_Reducer';
import { gradientsList_ActionCreators } from '../../store/reducers/gradients-list/gradientsList_ActionCreators'

afterEach(() => {
  cleanup();
})

test('should return the initial state, i want to die', () => {
    expect(reducer(undefined, {})).toEqual({"gradients": [{"firstColor": "#a85caa", "id": "1", "secondColor": "#8cb8e9"}, {"firstColor": "#d68d3a", "id": "2", "secondColor": "#bb44a2"}], "state": {"gradients": [{"firstColor": "#a85caa", "id": "1", "secondColor": "#8cb8e9"}, {"firstColor": "#d68d3a", "id": "2", "secondColor": "#bb44a2"}]}})
})
  
test('should handle a gradient being added to an empty list, i want to die', () => {
  const previousState = []
  expect(reducer(previousState, gradientsList_ActionCreators.addGradient(
    {
      id: '1',
      firstColor: '#a85caa',
      secondColor: '#8cb8e9'
    }
  ))).toEqual({"gradients" : [
    {
      id: '1',
      firstColor: '#a85caa',
      secondColor: '#8cb8e9'
    }
  ]})
})

test('should handle a gradient being added to an existing list, i want to die', () => {
  const previousState = [
    {
      id: '1',
      firstColor: '#a85caa',
      secondColor: '#8cb8e9'
    }
  ]
  expect(reducer(previousState, gradientsList_ActionCreators.addGradient(
    {
      id: '2',
      firstColor: '#d68d3a',
      secondColor: '#bb44a2'
    }
  ))).toEqual({"0": {"firstColor": "#a85caa", "id": "1", "secondColor": "#8cb8e9"}, "gradients": [{"firstColor": "#d68d3a", "id": "2", "secondColor": "#bb44a2"}]})
})

test('should handle a gradient being removed from existing list, i want to die', () => {
  const previousState = [
    {
      id: '1',
      firstColor: '#a85caa',
      secondColor: '#8cb8e9'
    }
  ]
  expect(reducer(previousState, gradientsList_ActionCreators.removeGradient(
    {
      id: '1',
      firstColor: '#a85caa',
      secondColor: '#8cb8e9'
    }
  ))).toEqual({"0":  {
          "firstColor": "#a85caa",
          "id": "1",
          "secondColor": "#8cb8e9",
        },
        "gradients": undefined})
})