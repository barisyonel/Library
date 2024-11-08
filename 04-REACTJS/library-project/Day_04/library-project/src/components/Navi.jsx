import React from 'react'
import Logo from '../assets/img/logo.png'
import '../assets/styles/navi.scss'

const Navi = () => {
  return (
    <nav>
      <div className="brand">
        <img src={Logo} alt="logo" />
        <h3>KD-21 Library</h3>
      </div>
      <div className="user-card">
        <button className='bn632-hover bn27'>Giriş Yap</button>
      </div>
    </nav>
  )
}

export default Navi