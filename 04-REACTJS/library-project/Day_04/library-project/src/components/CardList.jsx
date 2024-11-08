import React from 'react'
import Card from './Card'
import '../assets/styles/card-list.scss'

const CardList = ({books,deleteBook,selectedCategory,search,setSelectedBook}) => {



  return (
    <div className='card-list'>
        {
          books.map(book=>
            !book.isDeleted &&
            (selectedCategory === book.bookCategory || selectedCategory === "Tüm Kitaplar") &&
            <Card key={book.id} book={book} deleteBook={deleteBook} search={search} setSelectedBook={setSelectedBook}/>
          )
        }
    </div>
  )
}

export default CardList