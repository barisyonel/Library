import React from 'react'
import Card from './Card'
import '../assets/styles/card-list.scss'

const CardList = ({books,deleteBook,selectedCategory,search}) => {



  return (
    <div className='card-list'>
        {
          books.map(book=>
            (selectedCategory === book.bookCategory || selectedCategory === "Tüm Kitaplar") &&
            <Card key={book.id} book={book} deleteBook={deleteBook} search={search}/>
          )
        }
    </div>
  )
}

export default CardList