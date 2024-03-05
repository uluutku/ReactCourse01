import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"
import "./App.css"

import { useState } from "react"

function App() {

  const [notes, setNotes] = useState([])

  const createTask = (title,content) => {
    const createdNotes = [...notes, {
      id:Math.round(Math.random()*9999999),
      title:title,
      content:content
    }]

    setNotes(createdNotes);
}

  return (
    <>
    <TaskCreate onCreate={createTask}/>
    <h1>Notlar</h1>
    <TaskList sendedNotes={notes}/>
    </>
  )
}

export default App
