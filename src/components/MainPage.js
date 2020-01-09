import React from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import Header from './Header'
import CounterButton from './CounterButton'

const MainPage = ({ robots, onSearchChange }) => {
    return (
        <div className='tc'>
            <Header />
            <CounterButton />
            <SearchBox onSearchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={robots} />
            </Scroll>
        </div>
    )
}

export default MainPage
