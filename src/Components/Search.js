import React from 'react'

function Search({ handleSearch }) {
    return (
        <div className='search'>
            <i class="fa fa-search"></i>
            <input type="text"
                onChange={
                    (event) => handleSearch(event.target.value)
                }
                placeholder='Search a note...' 
            />
        </div>
    )
}

export default Search