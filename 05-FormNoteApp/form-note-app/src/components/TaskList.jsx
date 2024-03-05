import TaskElement from "./TaskElement";

function TaskList({sendedNotes, onDelete}) {
    return (
    <>
    <div>
        <div className="note-show-container">
            {sendedNotes.map((selectedNote,index) => {return (
                <TaskElement selectedNote={selectedNote} key={index} onDelete={onDelete} />
            )
            })};
        </div>
    </div>
    </>);
}

export default TaskList;