import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Component from './Component'

describe('the component', () => {
  let elRef;
  beforeEach(() => {
  })

  it('renders', () => {
    ReactTestUtils.renderIntoDocument(<Component ref={(el) => {elRef = el}} />)
    const button = ReactTestUtils.findRenderedDOMComponentWithTag(elRef, 'button')
    ReactTestUtils.Simulate.click(button)
    expect(button).toBeDefined()
  })

  afterEach(() => {
  })
})