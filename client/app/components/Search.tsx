import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <article className='searchBox'>
            <label htmlFor="search" className=""><SearchIcon /></label>
            <input type="text" id="search" placeholder="Search for products, brands and more..." className="bg-transparent outline-none" />
        </article>
    )
}

export default Search
