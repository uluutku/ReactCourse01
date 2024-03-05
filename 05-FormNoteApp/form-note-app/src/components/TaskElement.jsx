import { useState } from "react"
import TaskCreate from "./TaskCreate"


function TaskElement({selectedNote, onDelete , onUpdate}) {

const [showEdit, setShowEdit] = useState(false)

const handleDeleteClick = () => {
    onDelete(selectedNote.id)
}

const handleEditClick = () => {
    setShowEdit(!showEdit)
}

const handleUpdateSubmit = (id, updatedTitle, updatedContent) => {
    setShowEdit(false)
    onUpdate(id, updatedTitle, updatedContent);
}

    return (<>
        {showEdit ? <TaskCreate selectedNote={selectedNote} isEditMode={true} onUpdate={handleUpdateSubmit}/> 
        
        :
        
         <div className="note-card-container">
            <h3>Not başlığı:</h3>
             <p>{selectedNote.title}</p>
             <h3>Not içeriği:</h3>
            <p>{selectedNote.content}</p>
        <div className="button-container">
            <button className="update-btn" onClick={handleEditClick}>Güncelle</button>
            <button className="delete-btn" onClick={handleDeleteClick}>Sil</button>
        </div>
    </div>
    
    } 
    
    </>)
}

export default TaskElement