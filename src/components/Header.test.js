import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header'

it("expect to render Header component", () => {
    expect(toJson(shallow(<Header />))).toMatchSnapshot()
})
