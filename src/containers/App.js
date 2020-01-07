import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import { setSearchField, setRequestRobots } from '../redux/actions'

const App = ({ robots, isPending, searchField, onSearchChange, onRequestRobots }) => {
	useEffect(() => onRequestRobots(), [onRequestRobots])

	const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

	return isPending
		? <h1>Loading</h1> 
		:	(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
			)
}

const mapStateToProps = ({ searchRobots, requestRobots }) => ({
	searchField: searchRobots.searchField,
	robots: requestRobots.robots,
	isPending: requestRobots.isPending,
	error: requestRobots.error
})

const mapDispatchToProps = dispatch => ({
	onSearchChange: e => dispatch(setSearchField(e.target.value)),
	onRequestRobots: () => dispatch(setRequestRobots())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)