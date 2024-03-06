import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"
import "./App.css"
import axios from "axios"

import { useEffect, useState } from "react"

function App() {

  const [notes, setNotes] = useState([])

  const createTask = async (title,content) => {
    const response = await axios.post("http://localhost:3004/notes" , {title:title, content:content} )
    console.log(response)

    const createdNotes = [...notes, 
      response.data
    ];

    setNotes(createdNotes);
}

const apiGetter = async () => {
  const apiResponse = await axios.get("http://localhost:3004/notes")
setNotes(apiResponse.data);
}

useEffect(() => {
apiGetter();
},[])

const deleteTaskById = async (id) => {
 await axios.delete(`http://localhost:3004/notes/${id}`)
 const afterDeleteNotes = notes.filter((notes) => {return notes.id !== id;})
 setNotes(afterDeleteNotes);
}

const editNoteById = async (id , updatedTitle, updatedContent) => {
  await axios.put(`http://localhost:3004/notes/${id}`,{title:updatedTitle, content:updatedContent})
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
