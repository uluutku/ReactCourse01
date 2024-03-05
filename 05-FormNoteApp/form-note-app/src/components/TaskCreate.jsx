import { useState } from "react";

function TaskCreate({onCreate}) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

    const handleSave = (event) => {
        event.preventDefault();
        onCreate(title,content);
        setTitle("");
        setContent("");
    }

    return (<>
    <div className="form-container">
        <h3>Lütfen not ekleyiniz!</h3>
        <form className="create-form" onSubmit={handleSave}>
            <label className="input-label">Başlık:</label>
            <input className="input-element" value={title} onChange={handleTitleChange}/>
            <label className="input-label">Notunuzu girin:</label>
            <textarea className="input-element" value={content} onChange={handleContentChange}/>
            <button className="save-button">Kaydet</button>
        </form>
    </div>
    </>);
}

export default TaskCreate;