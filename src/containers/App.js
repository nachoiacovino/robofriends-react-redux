import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import { setSearchField, setRequestRobots } from '../redux/actions'
import Header from '../components/Header'

const App = () => {
	const [filteredRobots, setFilteredRobots] = useState([])
	
	const dispatch = useDispatch()
	const searchField = useSelector(({ searchRobots }) => searchRobots.searchField)
	const robots = useSelector(({ requestRobots }) => requestRobots.robots)
	const isPending = useSelector(({ requestRobots }) => requestRobots.isPending)
	const error = useSelector(({ requestRobots }) => requestRobots.error)
	
	const onSearchChange = e => dispatch(setSearchField(e.target.value))

	useEffect(() => dispatch(setRequestRobots()), [dispatch])
	useEffect(() => {
		setFilteredRobots(
			robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
		)
	}, [robots, searchField])

	return isPending
		? <h1>Loading</h1> 
		:	(
			error
			? <h1>There has been an error, please try again later. </h1>
			:	(
				<div className='tc'>
					<Header />
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
				)
			)
}

export default App
