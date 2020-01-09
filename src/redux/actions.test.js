import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
// import nock from 'nock'
import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
} from './constants'
import { setSearchField, setRequestRobots } from './actions'

const mockStore = configureStore([thunkMiddleware])

describe("setSearchField", () => {
    it("should create an action to search robots", () => {
        const text = "woo"
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(setSearchField(text)).toEqual(expectedAction)
    })
})

describe("setRequestRobots", () => {
    const store = mockStore()
    
    it("handles requesting robots API", async () => {
        await store.dispatch(setRequestRobots())
        const actions = store.getActions()

        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING
        }
        expect(actions[0]).toEqual(expectedAction)
    })

    // it("should execute axios", async () => {
    //     await store.dispatch(setRequestRobots())
    //     const actions = store.getActions()

    //     const expectedAction = {
    //         type: 'REQUEST_ROBOTS_SUCCESS',
    //         payload: [
    //           [Object], [Object],
    //           [Object], [Object],
    //           [Object], [Object],
    //           [Object], [Object],
    //           [Object], [Object]
    //         ]
    //     }

    //     expect(actions[1]).toEqual(expectedAction)
        
    // })

    
})