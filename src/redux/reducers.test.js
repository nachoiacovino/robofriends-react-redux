import {  
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
} from './constants'

import { setSearchField } from './actions'

import { searchRobots, requestRobots } from './reducers'

describe("searchRobots", () => {
    const initialStateSearch = {
        searchField: ""
    }

    it("should return the initial state", () => {
        expect(searchRobots(undefined, {})).toEqual(initialStateSearch)
    })

    it("should handle CHANGE_SEARCH_FIELD", () => {
        expect(searchRobots(initialStateSearch, setSearchField("abc"))).toEqual({ searchField: "abc" })
    })
})

describe("requestRobots", () => {
    const initialStateRequest = {
        isPending: false,
        robots: [],
        error: ""
    }

    it("should return the initial state", () => {
        expect(requestRobots(undefined, {})).toEqual(initialStateRequest)
    })

    it("should handle REQUEST_ROBOTS_PENDING action", () => {
        expect(requestRobots(initialStateRequest, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            isPending: true,
            robots: [],
            error: ""
        })
    })

    it("should handle REQUEST_ROBOTS_SUCCESS action", () => {
        expect(requestRobots(initialStateRequest, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: "123",
                name: "test",
                email: "test@gmail.com"
            }]
        })).toEqual({
            isPending: false,
            robots: [{
                id: "123",
                name: "test",
                email: "test@gmail.com"
            }],
            error: ""
        })
    })

    it("should handle REQUEST_ROBOTS_FAILED action", () => {
        expect(requestRobots(initialStateRequest, {
            type: REQUEST_ROBOTS_FAILED,
            payload: "An error occurred."
        })).toEqual({
            isPending: false,
            robots: [],
            error: "An error occurred."
        })
    })
})