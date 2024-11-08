import React from 'react'
import '../assets/styles/search.scss'
import { FaSearch } from "react-icons/fa";

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
        <FaSearch  className='scope'/>
      </div>
    </div>
  )
}

export default SearchBar