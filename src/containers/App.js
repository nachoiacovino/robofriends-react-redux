import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

const App = () => {
	const [robots, setRobots] = useState([])
	const [searchField, setSearchField] = useState("")

	useEffect(() => {
		const fetchData = async () => {
		const res = await axios.get("https://jsonplaceholder.typicode.com/users")
		setRobots(res.data)
		}
		fetchData()
	}, [])

	const onSearchChange = e => setSearchField(e.target.value)

	const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

	return !robots.length ?
		<h1>Loading</h1> :
		(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots} />
			</Scroll>
		</div>
		)
}

export default App