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
    });
    //form resetleme
    setBookName("");
    setBookAuthor("");
    setBookCategory("Kategori Seçiniz");
    setBookDescription("");
    setBookISBNNO("");
    setBookImage("");
    setBookPageCount("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Kitap Ekle</h3>
      <input value={bookName} onChange={e=>setBookName(e.target.value)}  type="text" placeholder='Kitap Adı' />
      <input value={bookAuthor} onChange={e=>setBookAuthor(e.target.value)} type="text" placeholder='Kitap Yazarı' />
      <select value={bookCategory} onChange={e=>setBookCategory(e.target.value)}>
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Finans</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Diğer</option>
      </select>
      <input value={bookPageCount} onChange={e=>setBookPageCount(e.target.value)} type="number" placeholder='Sayfa Sayısı' />
      <input value={bookISBNNo} onChange={e=>setBookISBNNO(e.target.value)} type="number" placeholder='ISBN No' />
      <input value={bookImage} onChange={e=>setBookImage(e.target.value)} type="url" placeholder='Kapak Resmi(url)' />
      <textarea value={bookDescription} onChange={e=>setBookDescription(e.target.value)} placeholder='Kitap Açıklaması'></textarea>
      <input disabled={
        bookName==="" ||
        bookCategory==="Kategori Seçiniz" ||
        bookAuthor==="" ||
        bookDescription==="" ||
        bookISBNNo==="" ||
        bookPageCount === ""} type="submit" value="Ekle" />
    </form>
  )
}

export default Form