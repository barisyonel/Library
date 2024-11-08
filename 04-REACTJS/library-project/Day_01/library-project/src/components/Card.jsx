import React from 'react'
import '../assets/styles/card.scss'

const Card = () => {
  return (
    <div className='card'>
      <button className='delete'>X</button>
      <button className='edit'>E</button>
      <img src="https://img.kitapyurdu.com/v1/getImage/fn:11948029/wh:true/wi:220" alt="kapak" />
      <div className="card-content">
          <h3>Körlük</h3>
          <p>Jose Saramago</p>
          <p>Kategorisi: Roman</p>
          <p>Sayfa Sayısı: 320</p>
          <p>
            Açıklaması: Usta yazarın belki de en etkileyici yapıtı olan, sinemaya da uyarlanmış Körlük, toplumsal yaşamın nasıl bir vahşete dönüşebileceğini...
          </p>
      </div>
    </div>
  )
}

export default Card