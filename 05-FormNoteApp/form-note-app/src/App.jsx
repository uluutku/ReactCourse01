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

const deleteTaskById = (id) => {
 const afterDeleteNotes = notes.filter((notes) => {return notes.id !== id;})
 setNotes(afterDeleteNotes);
}

const editNoteById = (id , updatedTitle, updatedContent) => {
    const editedNotes = notes.map((notes) => {
      if(notes.id === id){
        return {id:id, title:updatedTitle, content: updatedContent}
      }
      return notes;
    });
    setNotes(editedNotes);
}

  return (
    <>
    <TaskCreate onCreate={createTask}/>
    <h1>Notlar</h1>
    <TaskList sendedNotes={notes} onDelete={deleteTaskById} onUpdate={editNoteById}/>
    </>
  )
}

export default App
