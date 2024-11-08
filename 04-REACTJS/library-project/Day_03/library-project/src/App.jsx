import React, { useState } from 'react'
import Navi from './components/Navi'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import Form from './components/Form'
import './assets/styles/app.css'


const App = () => {
  //const [stateAdı,stateMetodu] = useState(İnitialValue);
  const [books,setBooks] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("Tüm Kitaplar");
  const [search,setSearch] = useState("");

  const getBooks = async ()=>{
    const url = "http://localhost:3005/books";
    const response = await fetch(url);
    const library = await response.json();
    // console.log(books);
    setBooks(library);
  }
  // getBooks();


  const AddBook = (newBook)=>{
    setBooks([...books,newBook]);
  }

  const deleteBook = (id)=>{
    setBooks(books.filter(stateBook=>stateBook.id !== id));
  }



  return (
    <>
      <Navi/>
      <Form AddBook={AddBook} books={books}/>
      <SearchBar setSelectedCategory={setSelectedCategory} setSearch={setSearch}/>
      <CardList books={books} deleteBook={deleteBook} selectedCategory={selectedCategory} search={search}/>
    </>
  )
}

export default App