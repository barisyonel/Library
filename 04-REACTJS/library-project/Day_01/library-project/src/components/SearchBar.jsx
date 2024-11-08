import React from 'react'
import '../assets/styles/search.scss'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <ul className="categories">
          <li>Yazılım</li>
          <li>Finans</li>
          <li>Tarih</li>
          <li>Roman</li>
          <li>Diğer</li>
      </ul>
      <div className="input">
        <input type="search"/>
      </div>
    </div>
  )
}

export default SearchBar