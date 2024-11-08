import React from 'react'
import '../assets/styles/form.scss'

const Form = () => {
  return (
    <form>
      <h3>Kitap Ekle</h3>
      <input type="text" placeholder='Kitap Adı' />
      <input type="text" placeholder='Kitap Yazarı' />
      <select>
        <option>Kategori Seçiniz</option>
        <option>Yazılım</option>
        <option>Finans</option>
        <option>Tarih</option>
        <option>Roman</option>
        <option>Diğer</option>
      </select>
      <input type="number" placeholder='Sayfa Sayısı' />
      <input type="number" placeholder='ISBN No' />
      <input type="url" placeholder='Kapak Resmi(url)' />
      <textarea placeholder='Kitap Açıklaması'></textarea>
      <input type="submit" value="Ekle" />
    </form>
  )
}

export default Form