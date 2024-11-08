import React, { useEffect, useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0);
  const [buttonValue, setButtonValue] = useState(true);

  //1.Durum = useEffect her durumda mutlaka 1 kere tetiklenir. Bu durumda sayfada herhangi bir eğişiklik olduğunda useEffect tekrar tekrar tetiklenir.(Dikkat edilmeldir. Sonsuz http requestlere sebep olabilir.)
  // useEffect(()=>{
  //   console.log("1.Durum UseEffect Çalıştı!"); 
  // });

  //2.Durum = useEffect bu durumda sadece 1 kere tetiklenir.
  // useEffect(()=>{
  //   console.log("2.Durum UseEffect Çalıştı!"); 
  // },[]);

  //3.1.Durum = useEffect her durumda mutlaka 1 kere tetiklenir. daha sonra sadece bağımlılığında değişiklik olduğu zaman tekrar tetiklenir
  // useEffect(()=>{
  //   console.log("3.1.Durum UseEffect Çalıştı!"); 
  // },[value]);

  //3.2.Durum = useEffect her durumda mutlaka 1 kere tetiklenir.daha sonra sadece bağımlılığında değişiklik olduğu zaman tekrar tetiklenir
  // useEffect(()=>{
  //   console.log("3.2.Durum UseEffect Çalıştı!"); 
  // },[buttonValue]);

  //3.3.Durum = useEffect her durumda mutlaka 1 kere tetiklenir.daha sonra sadece bağımlılığında değişiklik olduğu zaman tekrar tetiklenir
  // useEffect(()=>{
  //   console.log("3.3.Durum UseEffect Çalıştı!"); 
  // },[buttonValue,value]);

  //4.Durum = useEffect her durumda mutlaka 1 kere tetiklenir. Clean-up fonksiyonu görevi.(İleri Seviye)Deboncing
  useEffect(()=>{
    console.log("4.Durum UseEffect Çalıştı!"); 
    return ()=>{
      console.log("4.Durum için Clean-Up Metodu Çalıştırıldı!");
    }
  },[value]);

  return (
    <>
      <div>
        <button onClick={()=>setValue(value+1)}>Arttır</button>
        <span> {value} </span>
        <button onClick={()=>setValue(value-1)}>Azalt</button>
      </div>
      <br />
      <button onClick={()=>setButtonValue(!buttonValue)}>{buttonValue?"True":"False"}</button>
    </>
  )
}

export default App