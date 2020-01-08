import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Scroll from './Scroll'

it("expect to render Scroll component", () => {
    expect(toJson(shallow(<Scroll />))).toMatchSnapshot()
})
