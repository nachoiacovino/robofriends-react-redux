import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { setSearchField, setRequestRobots } from '../redux/actions'
import MainPage from '../components/MainPage'

const App = () => {
  const [filteredRobots, setFilteredRobots] = useState([])

	const dispatch = useDispatch()
	const searchField = useSelector(({ searchRobots }) => searchRobots.searchField)
	const robots = useSelector(({ requestRobots }) => requestRobots.robots)
	const isPending = useSelector(({ requestRobots }) => requestRobots.isPending)
  const error = useSelector(({ requestRobots }) => requestRobots.error)
  
  useEffect(() => dispatch(setRequestRobots()), [dispatch])
	useEffect(() => {
		setFilteredRobots(
			robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
		)
  }, [robots, searchField])

  const onSearchChange = e => dispatch(setSearchField(e.target.value))

	return isPending
		? <h1>Loading</h1> 
		:	(
        error
        ? <h1>There has been an error, please try again later. </h1>
        :	<MainPage robots={filteredRobots} onSearchChange={onSearchChange} />
			)
}

export default App
