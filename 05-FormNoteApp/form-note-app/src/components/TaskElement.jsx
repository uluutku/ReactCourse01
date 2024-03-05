
function TaskElement({selectedNote}) {
    console.log(selectedNote)
    return (
    <div className="note-card-container">
        <h3>Not başlığı:</h3>
        <p>{selectedNote.title}</p>
        <h3>Not içeriği:</h3>
        <p>{selectedNote.content}</p>
        <div className="button-container">
            <button className="update-btn">Güncelle</button>
            <button className="delete-btn">Sil</button>
        </div>
    </div>)
}

export default TaskElement