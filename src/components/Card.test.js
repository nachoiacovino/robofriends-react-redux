import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { create } from 'react-test-renderer'
import Card from './Card'

it("expect to render Card component", () => {
    expect(toJson(shallow(<Card />))).toMatchSnapshot()
})

it("expect to render Card component TestRenderer", () => {
    expect(create(<Card />)).toMatchSnapshot()
})