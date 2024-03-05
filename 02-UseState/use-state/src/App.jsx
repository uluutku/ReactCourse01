import React, {useState} from "react"

function App() {

  const [value, setValue] = useState(0)

  function handleAddCourse(){
        setValue(value + 1)
  }

  return (
    <>
    <button onClick={handleAddCourse} onDoubleClick={() => {setValue(value + 5)}}>Kurs Ekle</button>
    <div>Kurs Sayısı: {value}</div>
    </>
  )
}

export default App
