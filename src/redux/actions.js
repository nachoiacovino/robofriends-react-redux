import axios from 'axios'
import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED 
} from './constants'

export const setSearchField = payload => ({
    type: CHANGE_SEARCH_FIELD,
    payload
})

export const setRequestRobots = () => dispatch => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    const fetchData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: res.data })
        } catch (error) {
            dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
        }
    }
    return fetchData()
}
