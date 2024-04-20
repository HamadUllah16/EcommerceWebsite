import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <article className='flex gap-1 p-2 items-center lg:w-72 lg:rounded-full lg:bg-neutral-200'>
            <label htmlFor="search" className=""><SearchIcon /></label>
            <input type="text" id="search" placeholder="Search for products, brands and more..." className="hidden lg:inline xl:inline 2xl:inline bg-transparent outline-none" />
        </article>
    )
}

export default Search
