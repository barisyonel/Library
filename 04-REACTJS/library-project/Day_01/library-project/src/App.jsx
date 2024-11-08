import React from 'react'
import Navi from './components/Navi'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import Form from './components/Form'
import './assets/styles/app.css'

const App = () => {
  return (
    <>
      <Navi/>
      <Form/>
      <SearchBar/>
      <CardList/>
    </>
  )
}

export default App