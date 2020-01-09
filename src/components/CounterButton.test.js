import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CounterButton from './CounterButton'

it("expect to render CounterButton component", () => {
    expect(toJson(shallow(<CounterButton />))).toMatchSnapshot()
})

it("correctly increments the counter", () => {
    const wrapper = shallow(<CounterButton />)

    wrapper.find("[id='CounterButton']").simulate("click")
    expect(wrapper.find("[id='CounterButton']").text()).toEqual("Count: 1")
})