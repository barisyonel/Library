import React, { useState } from 'react'
import Navi from './components/Navi'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import Form from './components/Form'
import './assets/styles/app.css'
import { books as Books }  from './assets/data/dataset'

const App = () => {
  //const [stateAdı,stateMetodu] = useState(İnitialValue);
  const [books,setBooks] = useState(Books);

  const AddBook = (newBook)=>{
    setBooks([...books,newBook]);
  }

  return (
    <>
      <Navi/>
      <Form AddBook={AddBook} books={books}/>
      <SearchBar/>
      <CardList books={books}/>
    </>
  )
}

export default App