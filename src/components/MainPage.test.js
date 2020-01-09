import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MainPage from './MainPage'

it("expect to render MainPage component", () => {
    const mockStore = {
        robots: [],
        searchField: "",
        isPending: true,
        error: ""
    }

    expect(toJson(shallow(<MainPage />))).toMatchSnapshot()
})