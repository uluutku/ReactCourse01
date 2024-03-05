import { useState } from "react";

function TaskCreate({onCreate , selectedNote, isEditMode, onUpdate}) {

    const [title, setTitle] = useState(selectedNote ? selectedNote.title : "")
    const [content, setContent] = useState(selectedNote ? selectedNote.content : "")

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

    const handleSave = (event) => {
        event.preventDefault();
        if(isEditMode){
            onUpdate(selectedNote.id, title, content)
        }
        else{
            onCreate(title,content);
        }

        setTitle("");
        setContent("");
    }

    return (<>

    {isEditMode ? 
    
    <div className="edit-container">
        <h3>Lütfen notunuzu güncelleyin!</h3>
        <form className="edit-form" onSubmit={handleSave}>
            <label className="edit-input-label">Başlık:</label>
            <input className="edit-input-element" value={title} onChange={handleTitleChange}/>
            <label className="edit-input-label">Notunuzu girin:</label>
            <textarea className="edit-input-element" value={content} onChange={handleContentChange}/>
            <button className="edit-save-button">Güncelle</button>
        </form>
    </div>
    
    :
    
    <div className="form-container">
        <h3>Lütfen not ekleyiniz!</h3>
        <form className="create-form" onSubmit={handleSave}>
            <label className="input-label">Başlık:</label>
            <input className="input-element" value={title} onChange={handleTitleChange}/>
            <label className="input-label">Notunuzu girin:</label>
            <textarea className="input-element" value={content} onChange={handleContentChange}/>
            <button className="save-button">Kaydet</button>
        </form>
    </div>}
    
    </>);
}

export default TaskCreate;