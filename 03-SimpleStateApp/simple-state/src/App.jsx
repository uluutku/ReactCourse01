import { useState } from "react"
import Rabbit from "./Rabbit"

function App() {

const [rabbits, setRabbits] = useState([])

const getRandomRabbit = () => {
  const rabbitArray = ["Rabbit1" , "Rabbit2" , "Rabbit3" , "Rabbit4"]
  return rabbitArray[Math.floor(Math.random()*rabbitArray.length)]
  
}

const rabbitList = rabbits.map((rabbit, index) => {
  return <Rabbit key={index} rabbitName={rabbit} />;
});

const handleClick = () => {
    setRabbits([...rabbits, getRandomRabbit()])
}

  return (
    <>
    <button className="add-button" onClick={handleClick}>Rastgele Tavşan Ekle</button>
    <div className="rabbit-container">
      {rabbitList}
    </div>
    </>
  )
}

export default App
