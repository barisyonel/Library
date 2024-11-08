import React from 'react'
import '../assets/styles/card.scss'
import { FaRegTrashAlt,FaPen } from "react-icons/fa";
import DefaultBook from "../assets/img/default.png";

const Card = ({book,deleteBook,search,setSelectedBook}) => {

// console.log(props.book);
// const {book} = props;

// console.log(book);



  return (
      (book.bookName.toLowerCase().startsWith(search.toLowerCase()) ||
      book.bookAuthor.toLowerCase().startsWith(search.toLowerCase()))
      &&
      <div className='card'>
        <button className='delete' onClick={()=>deleteBook(book.id)}>
          <FaRegTrashAlt size={40} />
        </button>
        <button className='edit' onClick={()=>setSelectedBook(book)}>
          <FaPen size={40} />
        </button>
        <img src={book.bookImage?book.bookImage:DefaultBook} alt="kapak" />
        <div className="card-content">
            <h3>{book.bookName}</h3>
            <p>{book.bookAuthor}</p>
            <p>Kategorisi: {book.bookCategory}</p>
            <p>Sayfa Sayısı: {book.bookPageCount}</p>
            <p>
              Açıklaması: {book.bookDescription.substring(0,book.bookDescription.substring(0,80).lastIndexOf(" "))+"..."}
            </p>
        </div>
      </div>
  )
}

export default Card