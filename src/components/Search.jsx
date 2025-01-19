import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import CardComponent from './Card'
import search from '../assets/search.png'
import NotFound from '../assets/NotFound.png'
import '../styles/search.css'
import { useState } from 'react'


const Search = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      setIsSearching(true);
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(`https://girman-backend.vercel.app/api/people/search?query=${query}`);
        const data = await response.json();

        if (response.ok && data.success && data.data.length > 0) {
          setResults(data.data);
        } else {
          setResults([]);
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching search results:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
        <Navbar />
        {!isSearching && <Header />}
        <div className="search-container">
            <img src={search} alt="Search" />
            <input 
                type="text" 
                placeholder="Search" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
        </div>
        {isSearching && (
        <div className="card-container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <img src={NotFound} alt="Not Found" />
          ) : (
            results.length > 0 && 
            results.map((person) => (
              <CardComponent
                key={person._id}
                firstName={person.first_name}
                lastName={person.last_name}
                city={person.city}
                Contact={person.contact_number}
              />
            ))
          )}
        </div>
      )}
    </>
  )
}

export default Search