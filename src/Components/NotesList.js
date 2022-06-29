import AddNotes from "./AddNotes"
import Note from "./Note"

const NotesList = ({ notes, handleanote, handleDeleteNotes }) => {
    return (
        <div className="list">
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNotes={handleDeleteNotes}
                />
            ))}
            <AddNotes handleanote={handleanote} />
        </div>
    );
}

export default NotesList