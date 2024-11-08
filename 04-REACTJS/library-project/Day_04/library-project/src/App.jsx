import React, { useEffect, useState } from 'react'
import Navi from './components/Navi'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import Form from './components/Form'
import './assets/styles/app.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { Flip, toast, ToastContainer } from 'react-toastify'

const App = () => {
  //const [stateAdı,stateMetodu] = useState(InitialValue);
  const [books,setBooks] = useState([]);
  const [categories,setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("Tüm Kitaplar");
  const [selectedBook, setSelectedBook] = useState("");
  const [search,setSearch] = useState("");
  
  const getBooks = async ()=>{
    const url = "http://localhost:3005/books";
    const response = await fetch(url);
    const library = await response.json();
    // console.log(books);
    setBooks(library);
  }

  const getCategories = async ()=>{
    const url = "http://localhost:3005/categories";
    const response = await axios.get(url);
    const categories = await response.data;
    setCategories(categories);
  }

  const AddBook = async (newBook)=>{
    let url = "http://localhost:3005/books";
    if(!selectedBook){//Kitap Ekleme Modu
      //Frontend Ekleme(pasif)
      // setBooks([...books,newBook]);
      newBook.id = (Number(books[books.length-1].id) + 1).toString(),
      setBooks(prev=>[...prev,newBook]);
      //Backend Ekelme(aktif)
      const response = await axios.post(url,newBook);
      console.log("eklenen kitap",response.data);
      // getBooks(); Gereksiz get Atar.
      //ToastMessage
      toast.success('Yeni Kitap Eklendi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }else{//Düzenleme Modu
      //Backend Düzenleme (aktif)
      url+=`/${selectedBook.id}`;
      const response = await axios.put(url,newBook);
      console.log("düzenlenmiş kitap",response.data);
      //Frontend Düzenleme (pasif)
      newBook.id = selectedBook.id;
      setBooks(prev=>prev.map(book=>{
        if(book.id === selectedBook.id){
          //düzenlenen kitapsa
          return {...newBook}
        }
        else{
          //düzenleme olmayacak normal kitap
          return {...book}
        }
      }))
      setSelectedBook("");
      //ToastMessage
      toast.warn('Kitap Düzenlendi!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }
  }

  const deleteBook = async (id)=>{
    //Frontend Silme (pasif)
    // setBooks(books.filter(stateBook=>stateBook.id !== id));
    setBooks(prev=>prev.filter(stateBook=>stateBook.id!==id));
    //Backend Silme (aktif)
    const url =`http://localhost:3005/books/${id}`;
    // const response = await axios.delete(url); // Bu aktif silmedir!! Tehlikeli!!
    const response = await axios.patch(url,{isDeleted: true});
    console.log("silinen kitap",response.data);
    //ToastMessage
    toast.error('Kitap Silindi!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
    
  }
  // getBooks();Hata! sonsuz get döngüsüne yol açar!!
  useEffect(()=>{
    getBooks();
    getCategories();
  },[]);
  return (
    <>
      <ToastContainer/>
      <Navi/>
      <Form AddBook={AddBook} selectedBook={selectedBook}/>
      <SearchBar setSelectedCategory={setSelectedCategory} setSearch={setSearch} categories={categories}/>
      <CardList books={books} deleteBook={deleteBook} selectedCategory={selectedCategory} search={search} setSelectedBook={setSelectedBook}/>
    </>
  )
}

export default App