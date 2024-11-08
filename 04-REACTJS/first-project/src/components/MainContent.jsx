import React from 'react'

const MainContent = () => {
    const country = "Turkey"
    const color = "hotpink";
    const backgroundColor = "teal";
    const spacing = "25";
  return (
    <main>
          <h3>JSX ve Özellikleri</h3>
          <p>
            JSX(JavaScript Syntax Extensions), js dosyasında html benzeri bir yazımla hem okunurluk hem de yazım hızı sağlayan yapılardır. Html kodu değildir!!
          </p>
          <ul>
            <li>JSX yapıları mutlaka bir kapsayıcı ile sarmalanmalıdır. eğer div elemnetine ihtiyaç yoksa boş fragment veya React.Fragment yapısı ile sarmalanması persormans açısından önemlidir.</li>
            <li>Eğer JSX yapısı içerisinde JS Kodları kullanılacaksa bu kodların süslü parantez ile sarılması gerekir. {country} since {2024-1923} years </li>
            <li style={{color:color,backgroundColor:backgroundColor,margin:spacing+"px"}}>JSX içerisinde inline css kullanılacaksa çift süslü parantez kullanılır. </li>
            <li>JSX taglerinde class yerine JSde olduğu gibi className yapısı kullanılır. Aynı şekilde for yerine de htmlFor yapısı kullanılır.</li>
          </ul>
    </main>
  )
}

export default MainContent