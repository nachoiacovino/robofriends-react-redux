import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CardList from './CardList'

it("expect to render CardList component", () => {
    const mockRobots = [
        {
            id: 1,
            name: "Jon Snow",
            username: "King in the North",
            email: "jon@gmail.com"
        }
    ]
    expect(toJson(shallow(<CardList robots={mockRobots} />))).toMatchSnapshot()
})