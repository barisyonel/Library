import React from 'react'
import '../assets/styles/search.scss'
import { FaSearch } from "react-icons/fa";

const SearchBar = ({setSelectedCategory,setSearch,categories}) => {
  return (
    <div className='search-bar'>
      <ul className="categories">
          {
            categories.map(category=>
              <li key={category.id} onClick={e=>setSelectedCategory(e.target.innerText)}>{category.categoryName}</li>
            )
          }
      </ul>
      <div className="input">
        <input onChange={e=>setSearch(e.target.value)} type="search" placeholder='Kitap Adı / Yazarı'/>
        <FaSearch  className='scope'/>
      </div>
    </div>
  )
}

export default SearchBar