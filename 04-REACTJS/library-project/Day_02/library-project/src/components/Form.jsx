import React, { useState } from 'react'
import '../assets/styles/form.scss'

const Form = ({AddBook,books}) => {

  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookCategory, setBookCategory] = useState("Kategori Seçiniz");
  const [bookPageCount, setBookPageCount] = useState("");
  const [bookISBNNo, setBookISBNNO] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [bookDescription, setBookDescription] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    AddBook({
      id: (Number(books[books.length-1].id) + 1).toString(),
      bookName: bookName,
      bookAuthor: bookAuthor,
      bookCategory: bookCategory,
      bookPageCount: bookPageCount,
      bookISBNNo: bookISBNNo,
      bookImage: bookImage,
      bookDescription: bookDescription
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Kitap Ekle</h3>
      <input onChange={e=>setBookName(e.target.value)}  type="text" placeholder='Kitap Adı' />
      <input onChange={e=>setBookAuthor(e.target.value)} type="text" placeholder='Kitap Yazarı' />
      <select onChange={e=>setBookCategory(e.target.value)}>
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Finans</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Diğer</option>
      </select>
      <input onChange={e=>setBookPageCount(e.target.value)} type="number" placeholder='Sayfa Sayısı' />
      <input onChange={e=>setBookISBNNO(e.target.value)} type="number" placeholder='ISBN No' />
      <input onChange={e=>setBookImage(e.target.value)} type="url" placeholder='Kapak Resmi(url)' />
      <textarea onChange={e=>setBookDescription(e.target.value)} placeholder='Kitap Açıklaması'></textarea>
      <input type="submit" value="Ekle" />
    </form>
  )
}

export default Form