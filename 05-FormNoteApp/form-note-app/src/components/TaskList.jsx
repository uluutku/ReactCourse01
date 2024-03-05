import TaskElement from "./TaskElement";

function TaskList({sendedNotes}) {
    return (
    <>
    <div>
        <div className="note-show-container">
            {sendedNotes.map((selectedNote,index) => {return (
                <TaskElement selectedNote={selectedNote} key={index} />
            )
            })};
        </div>
    </div>
    </>);
}

export default TaskList;