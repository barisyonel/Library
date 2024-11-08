import React from 'react'
import Card from './Card'
import '../assets/styles/card-list.scss'

const CardList = ({books}) => {



  return (
    <div className='card-list'>
        {
          books.map(book=>
            <Card key={book.id} book={book}/>
          )
        }
    </div>
  )
}

export default CardList