import './App.css'
import { useState, useEffect } from 'react'

function App() {

const [can, setCan] = useState(0);
const [tuba, setTuba] = useState(0);

useEffect(() => {
  console.log(",[] argümansız, hep çalışır.")
})

useEffect(() => {
  console.log("boş array [] => ilk renderda çalışır sonra çalışmaz")
},[])

useEffect(() => {
  console.log("[can] => ilk renderda çalışır, can değiştikçe çalışır")
},[can])

  return (
    <>
      <div className='App'>
          <div className='button-container'>
              <button onClick={() => {setCan(can+1)}}>Can ++</button>
              <div>Can:{can}</div>
          </div>
          <div className='button-container'>
              <button onClick={() => {setTuba(tuba+1)}}>Tuba ++</button>
              <div>Tuba:{tuba}</div>
          </div>

      </div>
    </>
  )
}

export default App
