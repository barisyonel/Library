import React from 'react'
import '../assets/styles/card.scss'
import { FaRegTrashAlt,FaPen } from "react-icons/fa";

const Card = ({book}) => {

// console.log(props.book);
// const {book} = props;

// console.log(book);



  return (
      <div className='card'>
        <button className='delete'><FaRegTrashAlt size={40} /></button>
        <button className='edit'><FaPen size={40} /></button>
        <img src={book.bookImage} alt="kapak" />
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