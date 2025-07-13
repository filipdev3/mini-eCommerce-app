import { useEffect, useState } from 'react'
import '../../styles/search-view-toggle.css'

export default function SearchBar({ productsFound, onSearch }){

    // state variable to store user input
    const[query, setQuery] = useState('');

    // useEffect with timeout to acheive debouncing
    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(query)
        }, 300)
        return () => clearTimeout(timeout) // cleanup, if user typing timeout starts again... onli if user stops for 300ms onSearch will be invoked
    }, [query])


    // clear search function
    const handleClick = () => {
        setQuery('')    // local state reset 
        onSearch('')    // parent component reset
    }

    return (
        <div className='search-bar-holder'>
            <input 
                className='search-bar' 
                type="text" 
                placeholder='Search...'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            {
                query &&
                <p className='search-results-count'> 
                    Products found: {productsFound}
                </p>
            }

            {
                query && 
                <button className='clear-btn' onClick={handleClick}>
                    &#10006;
                </button>
            }
            
        </div>
    )
}