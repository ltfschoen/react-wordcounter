import React from 'react'
import renderer from 'react-test-renderer'
import Counter from '../Counter'

describe('A counter', () => {
  it('displays the count', () => {
    const counter = renderer.create(<Counter legend="Count" count={34}/>)
    expect(counter.toJSON()).toMatchSnapshot();
  })
})
