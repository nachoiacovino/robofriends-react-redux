import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchBox from './SearchBox'

it("expect to render SearchBox component", () => {
    expect(toJson(shallow(<SearchBox />))).toMatchSnapshot()
})
