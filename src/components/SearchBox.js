import React from 'react'

const SearchBox = ({ onSearchChange }) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox